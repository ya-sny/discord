import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI17tUGL_9TCk9d5mFu8HhF1f-YvP9gTo",
  authDomain: "discord-a05b0.firebaseapp.com",
  projectId: "discord-a05b0",
  storageBucket: "discord-a05b0.appspot.com",
  messagingSenderId: "945239863393",
  appId: "1:945239863393:web:8eba9cc3d270a0d4963a20"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
