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

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

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

  export const createCollectionAndDocuments = async (collectionKey, documents) => {
    const collectionRef = firestore.collection(`${collectionKey}`);

    const batchGroup = firestore.batch();

    documents.forEach(doc => {
      const newDocRef = collectionRef.doc();
      batchGroup.set(newDocRef, doc);
    });

    return await batchGroup.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });

    const reducedTransformedCollections = transformedCollections.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
    console.log(reducedTransformedCollections);
    return reducedTransformedCollections;
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }

  export default firebase;