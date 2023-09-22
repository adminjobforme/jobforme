import * as admin from 'firebase/firestore';
import * as storage from 'firebase/storage';
import { bucket, db } from '../../firebase';
import { Order } from '../models/order-model';
import { FileUploadModel } from '../models/file-upload-model';

const curDb = process.env.REACT_APP_TEST_DB as string

const getExtension = (type: string) => {
    if(type =='application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'docx';
    if(type == 'application/msword') return 'doc';
    if(type == 'application/pdf') return 'pdf';
    else{
        throw new Error(`file type: ${type} not supported`)
    }
}

export const getAllOrders = async () => {
    const collectionRef = admin.collection(db, curDb);
    return await admin.getDocs(collectionRef);
}

export const getStorageLink = async (fileRef: string): Promise<string> => {
    return await storage.getDownloadURL(storage.ref(bucket,fileRef));
}

export const getOrder = async (orderId: string) => {
    const docRef = admin.doc(db, curDb, orderId) 
    const order = await admin.getDoc(docRef)
    .then(snapshot => {return snapshot.data()})
    .catch((e) => console.log(e))
    return order;
}

export const addOrder = async (order: Order) => {
    let storageRefs;
    if(order.files != undefined){
        storageRefs = await uploadFiles(order, order.files, curDb)
        .then((storageRefs) => {return storageRefs})
        .catch((e) => {console.log(e)})

        await admin.setDoc(admin.doc(db, curDb, order.orderId),({
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
        await admin.setDoc(admin.doc(db, curDb, order.orderId),({
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
        const storageRef = storage.ref(bucket, `${dir}/${order.orderId}/cv.${getExtension(files.cv.type)}`)
        await storage.uploadBytesResumable(storageRef, files.cv).then((snapshot) => {
            refs.push(snapshot.ref.fullPath);
        }).catch((e) => {console.log(e)})
    }
    if(files.coverLetter != undefined){
        const storageRef = storage.ref(bucket, `${dir}/${order.orderId}/coverLetter.${getExtension(files.coverLetter.type)}`)
        await storage.uploadBytesResumable(storageRef, files.coverLetter).then((snapshot) => {
            refs.push(snapshot.ref.fullPath);
        }).catch((e) => {console.log(e)})
    }
    

    return refs;
}