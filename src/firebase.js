import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId:  process.env.REACT_APP_projectId,
    storageBucket:  process.env.REACT_APP_storageBucket,
    messagingSenderId:  process.env.REACT_APP_messagingSenderId,
    appId:  process.env.REACT_APP_appId
    
  };
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  // Export firestore database
  // It will be imported into your react app whenever it is needed
  export const db = getFirestore(app);