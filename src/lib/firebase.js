import React from "react";
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDzMDHskWze5kQ717z9dLvMlgnP4GKhaDY",
    authDomain: "gcclone-61329.firebaseapp.com",
    projectId: "gcclone-61329",
    storageBucket: "gcclone-61329.appspot.com",
    messagingSenderId: "254638486079",
    appId: "1:254638486079:web:c889228d79d7098afdfe8a"
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage,db };

export default db;