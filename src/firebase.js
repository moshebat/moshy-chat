import firebase from "firebase/app";
import "firebase/auth";



export const auth = firebase.initializeApp({

    apiKey: "AIzaSyB1EJFJ2nxV-FeanKVGdIHRvwB5ZL4p4BA",
    authDomain: "moshychat-c880e.firebaseapp.com",
    projectId: "moshychat-c880e",
    storageBucket: "moshychat-c880e.appspot.com",
    messagingSenderId: "202928709567",
    appId: "1:202928709567:web:17e6651e419a6d2f110b0a",
    measurementId: "G-C5P6Y5EKT5"
}).auth();