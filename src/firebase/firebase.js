// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFK-6h5W0zsbZqCKfkR6hS72ghgCsXmNM",
  authDomain: "neatskills-clone.firebaseapp.com",
  projectId: "neatskills-clone",
  storageBucket: "neatskills-clone.appspot.com",
  messagingSenderId: "1006776012145",
  appId: "1:1006776012145:web:2cc8a22be6eeaa8efbbad0",
  measurementId: "G-EDLWF60MV8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export async function googleSignIn() {
  const token_ = await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      return token;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  return token_;
}
