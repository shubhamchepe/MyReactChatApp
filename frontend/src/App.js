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
      push.create("test notification", {
        body: "sent you a message",
        timeout: 4000,
      });
  }

  const onDenied = () => {
    console.log("denied");
  }

  useEffect(() => {
    push.Permission.request(onGranted, onDenied);
  }, []);

  return (
    <div className="App">
      
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}



export default App;
