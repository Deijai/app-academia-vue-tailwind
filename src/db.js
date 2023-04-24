import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: process.env.DB_API_KEY,
        authDomain: "app-treino-539b7.firebaseapp.com",
        projectId: "app-treino-539b7",
        storageBucket: "app-treino-539b7.appspot.com",
        messagingSenderId: "341746185995",
        appId: "1:341746185995:web:32cf595b3a98cdd711940e",
        measurementId: "G-69J2HVMMXL"
    })
    .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });