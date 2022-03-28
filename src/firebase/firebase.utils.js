import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCVv-E2Dm1prtiiyJCHE8RAN-LjbMyb_GU",
    authDomain: "ecommerce-react-e8653.firebaseapp.com",
    projectId: "ecommerce-react-e8653",
    storageBucket: "ecommerce-react-e8653.appspot.com",
    messagingSenderId: "37092007307",
    appId: "1:37092007307:web:8917306d3adb6d0679238e",
    measurementId: "G-Z2BGFSQWC0"
};

export const createUserProfileData = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // console.log(userAuth)

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log(userRef);
    // console.log(snapShot);

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
