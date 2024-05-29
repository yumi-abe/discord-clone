import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCb7PyWeJcWunCL5mNkoMVZc7uXOFdRlos",
  authDomain: "discord-clone-509e4.firebaseapp.com",
  projectId: "discord-clone-509e4",
  storageBucket: "discord-clone-509e4.appspot.com",
  messagingSenderId: "782460283638",
  appId: "1:782460283638:web:a3b816b8c09fd9ba091ad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };