importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDy3YpNhFbSLvEZKloGN_RNdOc3-vh1A7o",
    authDomain: "flight-status-app-43e14.firebaseapp.com",
    projectId: "flight-status-app-43e14",
    storageBucket: "flight-status-app-43e14.appspot.com",
    messagingSenderId: "150664204879",
    appId: "1:150664204879:web:dfabdabded0f3f4974903a",
    measurementId: "G-E3TLEJ7X90",
    databaseURL: "https://flight-status-app-43e14-default-rtdb.firebaseio.com"
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