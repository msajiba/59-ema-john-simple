// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGxfrw0CV6vv3ZBGB5vUYJ3mwOjadNZmM",
  authDomain: "ema-john-simple-c4851.firebaseapp.com",
  projectId: "ema-john-simple-c4851",
  storageBucket: "ema-john-simple-c4851.appspot.com",
  messagingSenderId: "773328187385",
  appId: "1:773328187385:web:0f48c56e3c32a59d1e5728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;