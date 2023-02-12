// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM6-3YKImTy9yUrLA6SlU1fUVei7DFi1o",
  authDomain: "netflix-clone-70bc8.firebaseapp.com",
  projectId: "netflix-clone-70bc8",
  storageBucket: "netflix-clone-70bc8.appspot.com",
  messagingSenderId: "1027440188472",
  appId: "1:1027440188472:web:807c510e1e6b8193c5dacd"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }