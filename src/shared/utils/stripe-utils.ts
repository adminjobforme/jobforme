import { httpsCallable } from 'firebase/functions';
import { functions } from '../../firebase';

export const createStripeCheckout = httpsCallable(functions, 'createStripeCheckout');
