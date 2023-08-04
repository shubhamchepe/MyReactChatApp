self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "/logo.png", 
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "1",
    },
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
