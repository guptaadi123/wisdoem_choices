import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDhqE6HaVSFF3pRZ6jUpmS8I4gF74ltCz0",
    authDomain: "wishdom-choice--v1.firebaseapp.com",
    projectId: "wishdom-choice--v1",
    storageBucket: "wishdom-choice--v1.appspot.com",
    messagingSenderId: "290866015262",
    appId: "1:290866015262:web:332322b09db37e72c4920f"
  };    
  const firebasApp = firebase.initializeApp(firebaseConfig);
  const db = firebasApp.firestore();

   export default db;

  


  