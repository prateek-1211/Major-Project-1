import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDy3YpNhFbSLvEZKloGN_RNdOc3-vh1A7o",
  authDomain: "flight-status-app-43e14.firebaseapp.com",
  databaseURL: "https://flight-status-app-43e14-default-rtdb.firebaseio.com",
  projectId: "flight-status-app-43e14",
  storageBucket: "flight-status-app-43e14.appspot.com",
  messagingSenderId: "150664204879",
  appId: "1:150664204879:web:beab573e7b0ed42274903a",
  measurementId: "G-3CLTKTV8YP"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);
// Get Firebase Cloud Functions
export const messaging = getMessaging(app);