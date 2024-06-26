// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf3knAzRvTIXTc3SgQZ_URoAs01zdG4hs",
  authDomain: "test-ycs.firebaseapp.com",
  databaseURL: "https://test-ycs-default-rtdb.firebaseio.com",
  projectId: "test-ycs",
  storageBucket: "test-ycs.appspot.com",
  messagingSenderId: "319915548886",
  appId: "1:319915548886:web:87ae08dabb7584b16fa977",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDatabase = getDatabase(app);
