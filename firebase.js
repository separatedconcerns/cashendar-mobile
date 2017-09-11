import firebase from 'firebase';
import Config from './config.json';

// Initialize Firebase
const config = {
  apiKey: Config.REACT_APP_FIREBASE_API_KEY,
  authDomain: Config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: Config.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: Config.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
