import { OrderType } from '../../shared/enums/order-type';

export const orderTypes = [
    [OrderType.CV],
    [OrderType.COVER_LETTER],
    [OrderType.LINKEDIN],
    [OrderType.INTERVIEW_PREPARATION],
    [OrderType.CAREER_PLAN],
    [OrderType.CV, OrderType.COVER_LETTER],
    [OrderType.CV, OrderType.LINKEDIN],
    [OrderType.COVER_LETTER, OrderType.LINKEDIN],
    [OrderType.CV, OrderType.COVER_LETTER, OrderType.LINKEDIN],
    [OrderType.CV_WRITING]
]