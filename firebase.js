import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDU8ukZU8xk3nxixlp7CPqsXf87o8k9VaE",
    authDomain: "pizza-r-n.firebaseapp.com",
    projectId: "pizza-r-n",
    storageBucket: "pizza-r-n.appspot.com",
    messagingSenderId: "413627459435",
    appId: "1:413627459435:web:23bad8c68d79d4e7fc4e2e",
    measurementId: "G-9SR24G1KMX"
};

let FIREBASE_APP;
if (!getApps().length) {
   FIREBASE_APP = initializeApp(firebaseConfig);
} else {
    FIREBASE_APP = getApp();
}

let auth;
if (!getAuth(FIREBASE_APP)) {
    auth = initializeAuth(FIREBASE_APP, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
} else {
    auth = getAuth(FIREBASE_APP);
}

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = auth;

