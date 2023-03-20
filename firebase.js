// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth" ; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDws2Q614CDPHdWDRa2p00WpRzAjVQPE2s",
  authDomain: "tunipark-d42f7.firebaseapp.com",
  projectId: "tunipark-d42f7",
  storageBucket: "tunipark-d42f7.appspot.com",
  messagingSenderId: "996010440851",
  appId: "1:996010440851:android:d365c86410d15a7fc83566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentification=getAuth(app) ;
export const db=getFirestore(app) ; 