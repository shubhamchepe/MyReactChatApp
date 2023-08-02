importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC7SNBAK2H-Vi9c7IWeDihxIzS-qJcZEd0",
  authDomain: "onbvn-notification.firebaseapp.com",
  projectId: "onbvn-notification",
  storageBucket: "onbvn-notification.appspot.com",
  messagingSenderId: "567593922264",
  appId: "1:567593922264:web:a49f0b1152b1628b6471ad",
  measurementId: "G-KHL4T0LNME",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
