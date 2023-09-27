// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCHiigLadZH20h1cUBozdM0vtgENXVWsQ",
  authDomain: "recoded-44a46.firebaseapp.com",
  projectId: "recoded-44a46",
  storageBucket: "recoded-44a46.appspot.com",
  messagingSenderId: "499112327337",
  appId: "1:499112327337:web:ecf2e9986ba01c3afc11b8",
  measurementId: "G-SXWYH5QBW9",
};


// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

  export const app = initializeApp(firebaseConfig)
export default firebase_app
export const auth = getAuth(firebase_app)
export const db = getFirestore(firebase_app)
// const analytics = getAnalytics(firebase_app)

export const initFirebase=()=> {
  return app
}

