// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {
    REACT_APP_APIKEY,
    REACT_APP_AUTHDOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGE_ID,
    REACT_APP_APP_ID,
    REACT_APP_MEASUREMENT
} = process.env;
const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGE_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);