import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa5pZw0zIcra5Ml1MhQvcrg7ccriNVA1g",
  authDomain: "miniblog-847b6.firebaseapp.com",
  projectId: "miniblog-847b6",
  storageBucket: "miniblog-847b6.appspot.com",
  messagingSenderId: "981354383517",
  appId: "1:981354383517:web:763543cae27d6c25b92c74"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
