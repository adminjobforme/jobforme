import * as admin from "firebase-admin";
import {PaymentStatus} from "../enum/payment-status";
import {OrderStatus} from "../enum/order-status";
import * as logger from "firebase-functions/logger";
import {Order} from "../models/order";

export const updatePaymentStatus =
    async (orderId: string, paymentStatus: PaymentStatus, db: string) => {
      await admin.firestore().collection(db)
        .doc(orderId)
        .update({paymentStatus: paymentStatus}).catch((e) => {
          logger.log(e);
        });
    };

export const updateOrderStatus =
    async (orderId: string, orderStatus: OrderStatus, db: string) => {
      await admin.firestore().collection(db)
        .doc(orderId)
        .update({orderStatus: orderStatus}).catch((e) => {
          logger.log(e);
        });
    };

export const deleteOrder =
    async (orderId: string, db: string) => {
      await admin.firestore().collection(db).doc(orderId).delete();
    };

export const getOrder = async (orderId: string, db: string):
 Promise<Order | void> => {
  const res = await admin.firestore().collection(db).doc(orderId).get()
    .then((doc) => {
      return doc.data() as unknown as Order;
    }).catch((err) => logger.error(err));

  return res;
};
