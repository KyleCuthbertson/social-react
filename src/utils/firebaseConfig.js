// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBovTaYBrvivOhgSdOQ-sL8LOY4nMAAshQ",
  authDomain: "connectme-cfe40.firebaseapp.com",
  projectId: "connectme-cfe40",
  storageBucket: "connectme-cfe40.appspot.com",
  messagingSenderId: "1077474511092",
  appId: "1:1077474511092:web:133dc02faa5d22bf0636a1",
  measurementId: "G-BL17Y2BX7D"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
// const analytics = getAnalytics(app);

export default app;