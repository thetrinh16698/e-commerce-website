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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;