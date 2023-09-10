import * as admin from 'firebase/firestore';
import * as storage from 'firebase/storage';
import { bucket, db } from '../../firebase';
import { Order } from '../models/order-model';
import { FileUploadModel } from '../models/file-upload-model';

export const addOrder = async (order: Order, collection: string) => {
    let storageRefs;
    if(order.files != undefined){
        storageRefs = await uploadFiles(order, order.files, process.env.TEST_DB as string || process.env.REACT_APP_TEST_DB as string)
        .then((storageRefs) => {return storageRefs})
        .catch((e) => {console.log(e)})

        await admin.setDoc(admin.doc(db, collection, order.orderId),({
            orderId: order.orderId,
            firstname: order.firstname,
            surname: order.surname,
            email: order.email,
            phone: order.phone,
            amount: order.amount,
            orderStatus: order.orderStatus,
            paymentStatus: order.paymentStatus,
            orderType: order.orderType,
            files: storageRefs,
            link: order.link || '',
            created: order.created
        }))
    }else {
        await admin.setDoc(admin.doc(db, collection, order.orderId),({
            orderId: order.orderId,
            firstname: order.firstname,
            surname: order.surname,
            email: order.email,
            phone: order.phone,
            amount: order.amount,
            orderStatus: order.orderStatus,
            paymentStatus: order.paymentStatus,
            orderType: order.orderType,
            link: order.link || '',
            created: order.created
        }))
    }
};

const uploadFiles = async (order: Order, files: FileUploadModel ,dir: string) => {
    const refs: string[] = [];

    if(files.cv != undefined){
        const storageRef = storage.ref(bucket, `${dir}/${order.orderId}/cv`)
        await storage.uploadBytesResumable(storageRef, files.cv).then((snapshot) => {
            refs.push(snapshot.ref.fullPath);
        }).catch((e) => {console.log(e)})
    }
    if(files.coverLetter != undefined){
        const storageRef = storage.ref(bucket, `${dir}/${order.orderId}/coverLetter`)
        await storage.uploadBytesResumable(storageRef, files.coverLetter).then((snapshot) => {
            refs.push(snapshot.ref.fullPath);
        }).catch((e) => {console.log(e)})
    }
    

    return refs;
}