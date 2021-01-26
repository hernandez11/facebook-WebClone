import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy0uSBCRu_KuMs3mkmh3-M_aKMY6K69JU",
    authDomain: "fb-clone-2c75f.firebaseapp.com",
    databaseURL: "https://fb-clone-2c75f.firebaseio.com",
    projectId: "fb-clone-2c75f",
    storageBucket: "fb-clone-2c75f.appspot.com",
    messagingSenderId: "20336744349",
    appId: "1:20336744349:web:2a96446226b00c18e74174",
    measurementId: "G-WDP9H9GN1H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;