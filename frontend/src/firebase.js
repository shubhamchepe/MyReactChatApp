
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";


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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);