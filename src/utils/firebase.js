// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcExCls1Q7mf_Xiyw8Gea__N-b326f5dA",
    authDomain: "netflis-98c27.firebaseapp.com",
    projectId: "netflis-98c27",
    storageBucket: "netflis-98c27.firebasestorage.app",
    messagingSenderId: "557290112759",
    appId: "1:557290112759:web:079968a98345b98dd5f5f2",
    measurementId: "G-P8NT87HR2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();