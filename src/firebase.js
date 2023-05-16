import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB06Wfv19ZQpBlggDmkt2iHXXGOB9SClPE",
    authDomain: "mid-as.firebaseapp.com",
    projectId: "mid-as",
    storageBucket: "mid-as.appspot.com",
    messagingSenderId: "961049087564",
    appId: "1:961049087564:web:9cdfdcbccf007f033e2ee9",
    measurementId: "G-D58LK4G3GK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
