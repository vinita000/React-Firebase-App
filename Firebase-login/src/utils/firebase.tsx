// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjEV2lArLv35itSKjysII08vvShMdmUWo",
  authDomain: "signup-loginapp-ccd25.firebaseapp.com",
  projectId: "signup-loginapp-ccd25",
  storageBucket: "signup-loginapp-ccd25.appspot.com",
  messagingSenderId: "485782201084",
  appId: "1:485782201084:web:626ab5444ad77adf296d79",
  measurementId: "G-YF2YMCLS5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();