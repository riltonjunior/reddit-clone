import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: '***REMOVED***',
  authDomain: '***REMOVED***',
  databaseURL: '***REMOVED***',
  projectId: '***REMOVED***',
  storageBucket: '***REMOVED***.appspot.com',
  messagingSenderId: '***REMOVED***',
  appId: '1:***REMOVED***:web:3ecebd479467743ccd44b7',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
