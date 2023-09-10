import {OrderStatus} from "../enum/order-status";
import {PaymentStatus} from "../enum/payment-status";

export interface Order {
    orderId: string;
    sessionId: string;
    paymentIntentId: string;
    firstname: string;
    surname: string;
    email: string;
    phone: string;
    orderStatus: OrderStatus;
    paymentStatus: PaymentStatus;
    orderType: string;
    files? : string,
    link? : string,
    created: string,
    delivered? : string
}

// database fields: orderId, sessionId, paymentIntentId?,
// fname, sname, email, phone, orderStatus, paymentStatus, files?, link?
// orderType, created, delivered.
