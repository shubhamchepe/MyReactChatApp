// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7SNBAK2H-Vi9c7IWeDihxIzS-qJcZEd0",
  authDomain: "onbvn-notification.firebaseapp.com",
  projectId: "onbvn-notification",
  storageBucket: "onbvn-notification.appspot.com",
  messagingSenderId: "567593922264",
  appId: "1:567593922264:web:a49f0b1152b1628b6471ad",
  measurementId: "G-KHL4T0LNME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDb = getStorage(app);
