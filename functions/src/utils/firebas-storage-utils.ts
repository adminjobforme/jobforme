import {getDownloadURL, getStorage} from "firebase-admin/storage";

export const getFile = async (fileRef: string) => {
  return await getDownloadURL(getStorage().bucket().file(fileRef));
};
