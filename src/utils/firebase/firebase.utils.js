import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW53iA7nyZCbGkobeR-YF07Wm9Tqs19hs",
  authDomain: "crwn-clothing-shop-cdc9a.firebaseapp.com",
  projectId: "crwn-clothing-shop-cdc9a",
  storageBucket: "crwn-clothing-shop-cdc9a.appspot.com",
  messagingSenderId: "507515356938",
  appId: "1:507515356938:web:ca848ede004b03226edcf3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const Provider = new GoogleAuthProvider();
Provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);
export const dp = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(dp, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("Found Err", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};
