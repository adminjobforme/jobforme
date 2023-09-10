import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getFunctions} from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const config = {
    apiKey: process.env.REACT_APP_API_KEY as string,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN as string,
    projectId: process.env.REACT_APP_PROJECT_ID as string,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET as string,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID as string,
    appId: process.env.REACT_APP_APP_ID as string
}

firebase.initializeApp(config);

export const functions = getFunctions();
export const db = getFirestore();
export const bucket = getStorage();
export default firebase;
