import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDs0BsYdml9TU6_43UjcNYUPBoGnCTbLQ",
    authDomain: "sevilmis-besi.firebaseapp.com",
    projectId: "sevilmis-besi",
    storageBucket: "sevilmis-besi.firebasestorage.app",
    messagingSenderId: "100261217360",
    appId: "1:100261217360:web:33e560629ea3e4a3603d55"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Offline persistence'ı etkinleştir
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('Persistence failed');
    } else if (err.code === 'unimplemented') {
      console.log('Persistence is not available');
    }
}); 