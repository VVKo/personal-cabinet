// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { postDataFromAPI } from "./data/Utils";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHwz-cXD4wOHG7CMw3ISsSEpoDera-YhQ",
    authDomain: "login-to-cms.firebaseapp.com",
    projectId: "login-to-cms",
    storageBucket: "login-to-cms.appspot.com",
    messagingSenderId: "294837942143",
    appId: "1:294837942143:web:e522e306abba1f346c4c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setUser) => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const token = result.user.accessToken

            const {photoURL, displayName} = result.user

            postDataFromAPI('CRUD_API',"ROLES",{token, data:{} }).then(resp => setUser({photoURL, displayName, ...resp}))


        })
        .catch((error) => {
            console.log(error);
        });
};
