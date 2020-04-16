import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVLIrZBTbopHyG4MUaUPJkChJSuhotZEo",
    authDomain: "biberclothing-db.firebaseapp.com",
    databaseURL: "https://biberclothing-db.firebaseio.com",
    projectId: "biberclothing-db",
    storageBucket: "biberclothing-db.appspot.com",
    messagingSenderId: "617190678650",
    appId: "1:617190678650:web:d1fcb7dfe02a57230f1bc3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserFromDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        console.log("Error while trying to create the user", error.message);
      }
    }

    return userRef;
  }

  export default firebase;