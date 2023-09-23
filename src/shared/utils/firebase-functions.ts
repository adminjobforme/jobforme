import { httpsCallable } from 'firebase/functions';
import { functions } from '../../firebase';

export const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');
export const sendSupportMail = httpsCallable(functions, 'sendSupportMail');
export const setOrderStatus = httpsCallable(functions, 'setOrderStatus');
