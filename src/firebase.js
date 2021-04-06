import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqzW_hRVQe7-Flsv6LTxCE6CusitRPSYI",
    authDomain: "realtime-chat-73cdd.firebaseapp.com",
    projectId: "realtime-chat-73cdd",
    storageBucket: "realtime-chat-73cdd.appspot.com",
    messagingSenderId: "611027608132",
    appId: "1:611027608132:web:26c6c46d4d7e20df6f1211",
    measurementId: "G-58Y813LFYD"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();