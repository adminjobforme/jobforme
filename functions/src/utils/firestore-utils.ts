import * as admin from "firebase-admin";
import {PaymentStatus} from "../enum/payment-status";
import {OrderStatus} from "../enum/order-status";
import * as logger from "firebase-functions/logger";


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
