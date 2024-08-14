// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "**************************",
    authDomain: "**********.firebaseapp.com",
    projectId: "*******",
    storageBucket: "**********.appspot.com",
    messagingSenderId: "**************",
    appId: "1:607960949829:web:***********************"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const APP = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const FIRESTORE = getFirestore(APP);