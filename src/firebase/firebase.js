import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCaF0ChfeqmiRxkYPWTKkVObG-7n0pPPso",
  authDomain: "codaisseur-5af7e.firebaseapp.com",
  databaseURL: "https://codaisseur-5af7e.firebaseio.com",
  projectId: "codaisseur-5af7e",
  storageBucket: "codaisseur-5af7e.appspot.com",
  messagingSenderId: "98946267840"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
