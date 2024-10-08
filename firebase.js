import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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

