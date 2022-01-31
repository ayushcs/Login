import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDudAmG6HJl4n8nB-CBVLh4u_7em-hylxA",
  authDomain: "login-dev-9f498.firebaseapp.com",
  projectId: "login-dev-9f498",
  storageBucket: "login-dev-9f498.appspot.com",
  messagingSenderId: "149951749002",
  appId: "1:149951749002:web:75b983e24d8a907adb4673",
  measurementId: "G-VGZ59Y1KBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);