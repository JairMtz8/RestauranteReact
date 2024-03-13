import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAT73deBQuWdCWL5FqqsCKObhQDUqnRer0",
    authDomain: "restaurantb-eb3e0.firebaseapp.com",
    projectId: "restaurantb-eb3e0",
    storageBucket: "restaurantb-eb3e0.appspot.com",
    messagingSenderId: "909391394434",
    appId: "1:909391394434:web:9277f1268b4d933ad7a69b"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };