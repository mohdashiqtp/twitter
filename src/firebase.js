import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-s2dkj59m4ZP9YI6tgOiXwq9CpNwU6pw",
    authDomain: "twitter-clone-f6068.firebaseapp.com",
    projectId: "twitter-clone-f6068",
    storageBucket: "twitter-clone-f6068.appspot.com",
    messagingSenderId: "97097043409",
    appId: "1:97097043409:web:b2dbcdf9b685263e3fe4f0",
    measurementId: "G-XZPQX2VNBQ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;