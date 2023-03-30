import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCj8OKy0D8haoi44DvfFdI9YCUYyNsSdIs",
    authDomain: "projeto-ead-de1c0.firebaseapp.com",
    projectId: "projeto-ead-de1c0",
    storageBucket: "projeto-ead-de1c0.appspot.com",
    messagingSenderId: "1096408308267",
    appId: "1:1096408308267:web:7088ceda6ed30806e9286e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider =  new firebase.auth.GoogleAuthProvider();



export   {db, auth, storage, provider};