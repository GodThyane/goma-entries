import { ServiceAccount } from 'firebase-admin';

const admin = require('firebase-admin');

const serviceAccount: ServiceAccount = {
   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
   privateKey: process.env.FIREBASE_PRIVATE_KEY,
   projectId: process.env.FIREBASE_PROJECT_ID,
};

export const firebaseAdmin =
   admin.apps.length === 0
      ? admin.initializeApp({
           credential: admin.credential.cert(serviceAccount),
        })
      : admin.apps[0];

export const dbAdmin = admin.firestore();
export const authAdmin = firebaseAdmin.auth();

export const arrayUnion = admin.firestore.FieldValue.arrayUnion;
