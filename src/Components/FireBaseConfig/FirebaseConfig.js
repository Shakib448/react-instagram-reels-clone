import firebase from 'firebase'

// use your app config here

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;