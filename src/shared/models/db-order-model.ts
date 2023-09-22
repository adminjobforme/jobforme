import { OrderStatus } from '../enums/order-status';
import { OrderType } from '../enums/order-type';
import { PaymentStatus } from '../enums/payment-status';

export interface DbOrder {
    orderId: string;
    firstname: string;
    surname: string;
    email: string;
    phone: string;
    orderStatus: OrderStatus;
    paymentStatus: PaymentStatus;
    amount: number;
    orderType: OrderType[];
    files?: string[];
    link?: string;
    created: string;
    delivered? : string
}