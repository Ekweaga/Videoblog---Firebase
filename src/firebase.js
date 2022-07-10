import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPXD2V0eeZg_zGYZp5c5oYvQperAOMr7Y",
  authDomain: "videoblog-e8fb2.firebaseapp.com",
  databaseURL: "https://videoblog-e8fb2-default-rtdb.firebaseio.com",
  projectId: "videoblog-e8fb2",
  storageBucket: "videoblog-e8fb2.appspot.com",
  messagingSenderId: "861809828096",
  appId: "1:861809828096:web:0c11636627922f21de93e5",
  measurementId: "G-RY70EFL9L0"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);