import firebase from 'firebase/app';
import 'firebase/auth';


export const auth = firebase.initializeApp({
  //SET SNIPPET OF CODE FROM FIREBASE
  }).auth();