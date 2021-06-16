import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyAKmDxwgtpdJWuzBx4tkobiYp3Q5uOG5dA",
        authDomain: "app-academia-vue.firebaseapp.com",
        projectId: "app-academia-vue",
        storageBucket: "app-academia-vue.appspot.com",
        messagingSenderId: "1079825797450",
        appId: "1:1079825797450:web:fe1f2a34c636a7691a71b3"
    })
    .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });