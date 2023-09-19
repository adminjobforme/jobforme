import {OrderStatus} from "../enum/order-status";
import {PaymentStatus} from "../enum/payment-status";

export interface Order {
    orderId: string;
    firstname: string;
    surname: string;
    email: string;
    phone: string;
    orderStatus: OrderStatus;
    paymentStatus: PaymentStatus;
    amount: number;
    orderType: string;
    files?: string[];
    link?: string;
    created: string;
    delivered? : string
}
