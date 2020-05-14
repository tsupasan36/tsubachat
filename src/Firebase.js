import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYpZ741GAzEXJlDgzUl0MHUgkZ3tiagr4",
  authDomain: "tsubacht.firebaseapp.com",
  databaseURL: "https://tsubacht.firebaseio.com",
  projectId: "tsubacht",
  storageBucket: "tsubacht.appspot.com",
  messagingSenderId: "221072790718",
  appId: "1:221072790718:web:793b166a61778263027aef",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
