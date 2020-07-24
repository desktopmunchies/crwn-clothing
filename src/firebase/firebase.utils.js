import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAOg3CDEehKksuMZhOoOdUyqSUgvKiRg3o',
  authDomain: 'crwn-db-cf437.firebaseapp.com',
  databaseURL: 'https://crwn-db-cf437.firebaseio.com',
  projectId: 'crwn-db-cf437',
  storageBucket: 'crwn-db-cf437.appspot.com',
  messagingSenderId: '825803242873',
  appId: '1:825803242873:web:782192290d128a519d83a8',
  measurementId: 'G-P8P3X77XV8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
