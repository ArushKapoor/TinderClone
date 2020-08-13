import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyASuLhemHMfKY5RAqM3uf009d1kFIMmkDc",
    authDomain: "tinder-clone-72e25.firebaseapp.com",
    databaseURL: "https://tinder-clone-72e25.firebaseio.com",
    projectId: "tinder-clone-72e25",
    storageBucket: "tinder-clone-72e25.appspot.com",
    messagingSenderId: "50364770516",
    appId: "1:50364770516:web:83cb10ae5f5a699503b341",
    measurementId: "G-Y1E9Z88X57"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;