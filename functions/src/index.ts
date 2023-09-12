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
import {updateOrderStatus, updatePaymentStatus} from "./utils/firestore-utils";
import {PaymentStatus} from "./enum/payment-status";
import {OrderStatus} from "./enum/order-status";
import {sendMessage} from "./mail/mail-service";

admin.initializeApp();
const db = functions.config().TEST_DB;

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const createStripeCheckout = functions.https.onCall(
  async (data: StripePayment, context) => {
    const stripe = new Stripe.Stripe(
      functions.config().stripe.secret_key,
      {apiVersion: "2023-08-16"});

    logger.log("Stripe initialized successfully!");
    const orderId = uuid4();
    const session = await stripe.checkout.sessions.create({
      client_reference_id: orderId,
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
    let checkoutEvent;
    let orderId;

    // Handle Order
    // TODO: 1. update payment status and order status :)
    // 3. Send email to tomek. 4. Send email to customer

    switch (event.type) {
    case "checkout.session.completed": // "payment_intent.succeeded"
      checkoutEvent = event.data;
      orderId = checkoutEvent.object.client_reference_id as string;
      logger.log(orderId);
      switch (checkoutEvent.object.payment_status as string) {
      case "paid":
        await updatePaymentStatus(orderId, PaymentStatus.PAID, db);
        await updateOrderStatus(orderId, OrderStatus.PROCESSING, db);
        break;
      default:
        await updatePaymentStatus(orderId, PaymentStatus.FAILED, db);
        await updateOrderStatus(orderId, OrderStatus.TERMINATED, db);
        break;
      }
      break;
    default:
      logger.log(`Unhandled event type ${event.type}`);
    }
  });

export const setOrderStatus = functions.https.onCall(
  (data: UpdateOrder, context) => {
    updateOrderStatus(data.orderId, data.orderStatus, db);
  });

export const sendMail = functions.https.onRequest(
  (request, response) => {
    sendMessage();
  });

