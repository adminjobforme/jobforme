import {OrderStatus} from "../enum/order-status";

export interface UpdateOrder {
    orderId: string;
    orderStatus: OrderStatus;
}
