import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBX95OWKVfLJ4lK1woWCn2PXQSkTX-lcPk",
  authDomain: "testme-26741.firebaseapp.com",
  projectId: "testme-26741",
  storageBucket: "testme-26741.firebasestorage.app",
  messagingSenderId: "665943061222",
  appId: "1:665943061222:web:d43b1c528c38d589164127",
  measurementId: "G-QPQ22FYF8R"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);