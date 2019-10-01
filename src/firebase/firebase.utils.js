import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAH1d7GksuTvk-DQscrDmsGcM62d5zxA28",
    authDomain: "e-commerce-website-2d060.firebaseapp.com",
    databaseURL: "https://e-commerce-website-2d060.firebaseio.com",
    projectId: "e-commerce-website-2d060",
    storageBucket: "",
    messagingSenderId: "791861065724",
    appId: "1:791861065724:web:fe65e75fc37003499ae479",
    measurementId: "G-9GH4NHW030"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;