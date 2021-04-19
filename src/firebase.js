import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMIRAPG2GadBvRcukHdWqnIm930cdpEaY",
  authDomain: "herbalife-backend.firebaseapp.com",
  projectId: "herbalife-backend",
  storageBucket: "herbalife-backend.appspot.com",
  messagingSenderId: "676243905708",
  appId: "1:676243905708:web:39d82af748f3480aa79309",
  measurementId: "G-2S1MET2Z80"
});

const db = firebaseApp.firestore()

export  {firebaseApp, db} ;