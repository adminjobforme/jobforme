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
  getOrder,
  updateOrderStatus,
  updatePaymentStatus,
} from "./utils/firestore-utils";
import {PaymentStatus} from "./enum/payment-status";
import {OrderStatus} from "./enum/order-status";
import {sendNoReplyMessage, sendSupportMessage} from "./mail/mail-service";
import {SupportMessage} from "./models/support-message";
import {Order} from "./models/order";

admin.initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const createStripeCheckout = functions.https.onCall(
  async (data: {product: StripePayment, key: string, db: string}, context) => {
    const stripe = new Stripe.Stripe(
      data.key,
      {apiVersion: "2023-08-16"});

    logger.log("Stripe initialized successfully!");
    const orderId = uuid4();
    const time = Math.floor(new Date().getTime()/1000.0);
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
          unit_amount: data.product.unitAmount,
          product_data: {
            name: data.product.name,
          },
        },
      }],
      metadata: {
        db: data.db,
      },
      expires_at: time + (60 * 30),
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
    const db = checkoutEvent.metadata.db;
    let orderId;
    let order: Order | void;

    // 2. need to extract any references to test keys/dbs and use env vars
    // in prod, use the prod key, locally use the test keys --- last
    // 3. finish about us

    switch (event.type) {
    case "checkout.session.completed": // "payment_intent.succeeded"
      orderId = checkoutEvent.client_reference_id as string;
      logger.log(checkoutEvent.expires_at);
      order = await getOrder(orderId, db);
      logger.log(order);
      switch (checkoutEvent.payment_status as string) {
      case "paid":
        if (order) {
          await updatePaymentStatus(orderId,
            PaymentStatus.PAID,
            db);
          await sendNoReplyMessage(
            "no-reply@jobforme.ie",
            functions.config().noreply.mail,
            order.email,
            order.orderType,
            order.amount,
            order.firstname + " " + order.surname,
            order.phone,
            order.orderId,
            order.files,
            order.link
          );
        } else {
          logger.error(
            "order paid for but unable to retrieve order from db" + orderId
          );
        }
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
      logger.info("entry deleted: " + orderId);
      break;
    default:
      logger.log(`Unhandled event type ${event.type}`);
    }

    response.send("webhook received!");
  });

export const setOrderStatus = functions.https.onCall(
  async (data: {order: UpdateOrder, db: string}, context) => {
    try {
      await updateOrderStatus(
        data.order.orderId,
        data.order.orderStatus,
        data.db);
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

