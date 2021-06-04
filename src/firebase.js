import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD2cc8bI73Va2UOKxaD40jIOI2iEvYk-os",
    authDomain: "react-crud-ddca5.firebaseapp.com",
    databaseURL: "https://react-crud-ddca5-default-rtdb.firebaseio.com",
    projectId: "react-crud-ddca5",
    storageBucket: "react-crud-ddca5.appspot.com",
    messagingSenderId: "871295077738",
    appId: "1:871295077738:web:46412535bdc5e1bd0a2913"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();

export { projectStorage };