import firebase from 'firebase'

// use your firebase app config here



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;