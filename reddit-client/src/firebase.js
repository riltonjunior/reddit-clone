import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyDr92eJ-JNouwRrQzCkMefPPqt_Fb_R_KM',
  authDomain: 'reddit-clone-e0b7c.firebaseapp.com',
  databaseURL: 'https://reddit-clone-e0b7c.firebaseio.com',
  projectId: 'reddit-clone-e0b7c',
  storageBucket: 'reddit-clone-e0b7c.appspot.com',
  messagingSenderId: '200451434134',
  appId: '1:200451434134:web:3ecebd479467743ccd44b7',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
