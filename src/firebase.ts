import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: <your apiKey>,
  authDomain: <your authDomain>,
  projectId: <your projectId>,
  storageBucket: <your storageBucket>,
  messagingSenderId: <your messagingSenderId>,
  appId: <your appId>
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
