import { OrderStatus } from '../enums/order-status';
import { OrderType } from '../enums/order-type';
import { PaymentStatus } from '../enums/payment-status';
import { FileUploadModel } from './file-upload-model';

export interface Order {
    orderId: string;
    firstname: string;
    surname: string;
    email: string;
    phone: string;
    orderStatus: OrderStatus;
    paymentStatus: PaymentStatus;
    amount: number;
    orderType: OrderType[];
    files?: FileUploadModel;
    link?: string;
    created: string;
    delivered? : string
}