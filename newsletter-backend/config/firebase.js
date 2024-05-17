import admin from 'firebase-admin';

let serviceAccount = require("../firebasekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { db };