import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

//import "firebase/functions"; //email verificcation

const firebaseConfig = {};

let app;
if (firease.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
export { db, auth };
