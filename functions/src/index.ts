import {UpdateOrder} from "./models/update-order";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";
import * as Stripe from "stripe";
import {StripePayment} from "./models/stripe-payment";
import {v4 as uuid4} from "uuid";
import * as admin from "firebase-admin";
import {
  deleteOrder,
  updateOrderStatus,
  updatePaymentStatus,
} from "./utils/firestore-utils";
import {PaymentStatus} from "./enum/payment-status";
import {OrderStatus} from "./enum/order-status";
import {sendSupportMessage} from "./mail/mail-service";
import {SupportMessage} from "./models/support-message";

admin.initializeApp();
const db = functions.config().db.test;

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const createStripeCheckout = functions.https.onCall(
  async (data: StripePayment, context) => {
    const stripe = new Stripe.Stripe(
      functions.config().stripe.secret_key,
      {apiVersion: "2023-08-16"});

    logger.log("Stripe initialized successfully!");
    const orderId = uuid4();
    const dt = new Date().getTime();
    const session = await stripe.checkout.sessions.create({
      client_reference_id: orderId,
      expires_at: (dt + (30*60*1000)),
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://jobforme-d9672.web.app/success",
      cancel_url: "https://jobforme-d9672.web.app/cancel",
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: data.unitAmount,
          product_data: {
            name: data.name,
          },
        },
      }],
      metadata: {
        orderId: orderId,
      },
    });

    logger.log(`url: ${session.url}`);
    logger.log(`id: ${session.client_reference_id}`);

    return {
      url: session.url,
      id: session.client_reference_id,
    };
  });

export const stripeWebhook = functions.https
  .onRequest(async (request, response) => {
    const event = request.body;
    const checkoutEvent = event.data.object;
    let orderId;

    // Handle Order
    // TODO: 1. update payment status and order status :)
    // 3. Send email to tomek. 4. Send email to customer

    // 1. need to add payment_intent.failed and remove order on fail
    // need to add metadata to payment intent to achieve this
    // can also switch from using checkout session to pi_suceeded event

    switch (event.type) {
    case "checkout.session.completed": // "payment_intent.succeeded"
      orderId = checkoutEvent.client_reference_id as string;
      logger.log(checkoutEvent.expiret_at);
      switch (checkoutEvent.object.payment_status as string) {
      case "paid":
        await updatePaymentStatus(orderId, PaymentStatus.PAID, db);
        await updateOrderStatus(orderId, OrderStatus.PROCESSING, db);
        // send email here with order details - complete no-reply tomorrow
        break;
      default:
        await updatePaymentStatus(orderId, PaymentStatus.FAILED, db);
        await updateOrderStatus(orderId, OrderStatus.TERMINATED, db);
        break;
      }
      break;
    case "checkout.session.expired":
      orderId = checkoutEvent.client_reference_id as string;
      await deleteOrder(orderId, db);
      break;
    default:
      logger.log(`Unhandled event type ${event.type}`);
    }

    response.send("webhook received!");
  });

export const setOrderStatus = functions.https.onCall(
  async (data: UpdateOrder, context) => {
    try {
      await updateOrderStatus(data.orderId, data.orderStatus, db);
    } catch (err) {
      return {
        statusCode: 400,
        error: err,
      };
    }
    return {
      statusCode: 200,
    };
  });

export const sendSupportMail = functions.https.onCall(
  (data: SupportMessage, context) => {
    sendSupportMessage(
      "help@jobforme.ie",
      functions.config().help.mail,
      data.fname,
      data.recipient,
      data.phone,
      data.question
    );

    return {
      statusCode: 200,
    };
  });

