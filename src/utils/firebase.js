import * as admin from "firebase-admin";
import { adminFirebaseConfig } from "@/firebase.config";
import { FireSQL } from "firesql";

if(admin.apps.length === 0){
    admin.initializeApp({
        credential: admin.credential.cert(adminFirebaseConfig)
    })
}

export const db = admin.firestore();
export const fireSql = new FireSQL(db);
// export const adminstorage = admin.storage(); to store image or