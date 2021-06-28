// import * as firebase from "firebase";
import "firebase/database";
import firebase from 'firebase/app';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDpilEcbdW85tIYP1LZRkvVms7yN1WSC4",
    authDomain: "smart-greenhouse-b5c22.firebaseapp.com",
    databaseURL: "https://smart-greenhouse-b5c22-default-rtdb.firebaseio.com",
    projectId: "smart-greenhouse-b5c22",
    storageBucket: "smart-greenhouse-b5c22.appspot.com",
    messagingSenderId: "368056212325",
    appId: "1:368056212325:web:6ba2fd426ef495fc851f8c",
    measurementId: "G-9J642K08BZ"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();