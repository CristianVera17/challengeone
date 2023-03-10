import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA171HgoWBbNAOjLUXy6pW9Qg5JcWQFFE",
  authDomain: "react-cd-auth.firebaseapp.com",
  projectId: "react-cd-auth",
  storageBucket: "react-cd-auth.appspot.com",
  messagingSenderId: "1063171967502",
  appId: "1:1063171967502:web:7f634ca46ebea44ea3ca5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);