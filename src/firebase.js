import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZMHj31JcLtxgaRLf8avi8vVnYmxAEi2Q",
    authDomain: "dummy-linkedin-clone-1f39a.firebaseapp.com",
    projectId: "dummy-linkedin-clone-1f39a",
    storageBucket: "dummy-linkedin-clone-1f39a.appspot.com",
    messagingSenderId: "263085253220",
    appId: "1:263085253220:web:07af9bc95b52be848af571"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebaseApp.storage;

  export { auth, provider, storage };
  export default db;