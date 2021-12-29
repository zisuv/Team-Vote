import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBidlRXdDeafXKcRcco1V2GedR0iA9kFro",
  authDomain: "open-source-16a88.firebaseapp.com",
  databaseURL: "https://open-source-16a88-default-rtdb.firebaseio.com",
  projectId: "open-source-16a88",
  storageBucket: "open-source-16a88.appspot.com",
  messagingSenderId: "82251199523",
  appId: "1:82251199523:web:376e7ee5ba9bfa5c2c2d96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();