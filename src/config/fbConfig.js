import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCBxcDZ5EGNrzlNkm1PT2wEP3P_iLNV9aM",
    authDomain: "project-3-15b18.firebaseapp.com",
    databaseURL: "https://project-3-15b18.firebaseio.com",
    projectId: "project-3-15b18",
    storageBucket: "project-3-15b18.appspot.com",
    messagingSenderId: "452085745348",
    appId: "1:452085745348:web:ede03b510e9257ca90eb91",
    measurementId: "G-B483SHSB9Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});
  
  const storage = firebase.storage();

  export {storage, firebase as default};


