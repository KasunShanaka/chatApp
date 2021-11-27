import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCBfeOiGUDBKQCjYu5AXyz_4NsIy4sz6ds",
    authDomain: "unichat-75b2f.firebaseapp.com",
    projectId: "unichat-75b2f",
    storageBucket: "unichat-75b2f.appspot.com",
    messagingSenderId: "884922994821",
    appId: "1:884922994821:web:f29bac44b126a2dc8599ec"
  }).auth();