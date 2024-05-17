import admin from 'firebase-admin';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

let serviceAccount = require("../firebasekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { db };