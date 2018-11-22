import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCVnOjKD8gpQxJcs1IIS1gjO7SqVMqOogE",
  authDomain: "aut-normal.firebaseapp.com",
  databaseURL: "https://aut-normal.firebaseio.com",
  projectId: "aut-normal",
  storageBucket: "aut-normal.appspot.com",
  messagingSenderId: "787444405958"
  };

  firebase.initializeApp(config);
  export default firebase;