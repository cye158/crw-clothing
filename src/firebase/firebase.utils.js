import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBJduArnLbdWMd-klhb5s6Hf6u7u6pIb-k",
  authDomain: "crw-clothing-db.firebaseapp.com",
  databaseURL: "https://crw-clothing-db.firebaseio.com",
  projectId: "crw-clothing-db",
  storageBucket: "",
  messagingSenderId: "347599928942",
  appId: "1:347599928942:web:603e61730d340f3e"
};

export const createUserProfileDoc = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...otherData });
    } catch (e) {
      console.log("Error creating user: ", e.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const LogInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
