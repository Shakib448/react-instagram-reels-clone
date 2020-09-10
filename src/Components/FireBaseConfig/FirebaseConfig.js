import firebase from 'firebase'

// use your firebase app config here
const firebaseConfig = {
    apiKey: "AIzaSyCWjpR4P5GGh445klpFBLusZ_MTUNrspG4",
    authDomain: "react-instagram-reels-clone.firebaseapp.com",
    databaseURL: "https://react-instagram-reels-clone.firebaseio.com",
    projectId: "react-instagram-reels-clone",
    storageBucket: "react-instagram-reels-clone.appspot.com",
    messagingSenderId: "167393851506",
    appId: "1:167393851506:web:791a9aa2ba29d7435b6aeb",
    measurementId: "G-LNVYJGVZSH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;