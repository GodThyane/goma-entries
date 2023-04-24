import { ServiceAccount } from 'firebase-admin';

const admin = require('firebase-admin');

const serviceAccount = JSON.parse(
   process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
) as ServiceAccount;

export const firebaseAdmin =
   admin.apps.length === 0
      ? admin.initializeApp({
           credential: admin.credential.cert(serviceAccount),
        })
      : admin.apps[0];

export const dbAdmin = admin.firestore();
export const authAdmin = firebaseAdmin.auth();

export const arrayUnion = admin.firestore.FieldValue.arrayUnion;
