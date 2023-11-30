// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkf4OAD8yivDO9iafJ4Wp9vHps9RnlbU",
  authDomain: "netflixxxx-clone.firebaseapp.com",
  projectId: "netflixxxx-clone",
  storageBucket: "netflixxxx-clone.appspot.com",
  messagingSenderId: "489032858231",
  appId: "1:489032858231:web:08846d13f95c7f1c0c2472"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);