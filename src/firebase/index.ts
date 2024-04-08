
import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAU-zmG_mvhYO9Iio3Kd5ppEBmvmqLaDQo",
  authDomain: "frist-auth-2c49f.firebaseapp.com",
  projectId: "frist-auth-2c49f",
  storageBucket: "frist-auth-2c49f.appspot.com",
  messagingSenderId: "826571505878",
  appId: "1:826571505878:web:4abc495c1a86c11bddc977",
  measurementId: "G-JB4NSD4EJH"
};

const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();
const db = getFirestore();
const auth = getAuth();

// const analytics = getAnalytics(app);
export default app;
export{db,auth}