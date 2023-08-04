import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import push from "push.js"; 


function App() {
  // const userPermission = async () => {
  //   const permission = await window.Notification.requestPermission();
  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: process.env.WEB_PUSH_CERTIFICATE,
  //     });
  //     console.log(token);
  //   } else if (permission === "denied") {
  //     alert("Notofication Denied!");
  //   }
  // };
  const onGranted = () => {
    console.log('granted')
  }

  const onDenied = () => {
    console.log("denied");
  }

  useEffect(() => {
    push.Permission.request(onGranted, onDenied);
       push.create("test notification", {
         body: "sent you a message",
         timeout: 4000,
       });
  }, []);

  return (
    <div className="App">
      
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

function urlBase64ToUint8Array(base64String) {
  try {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  } catch (error) {
    console.error("Error converting VAPID public key to Uint8Array:", error);
    return null;
  }
}

export default App;
