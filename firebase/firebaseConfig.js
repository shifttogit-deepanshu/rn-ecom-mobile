import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCX0sYKoRssF7rgntfPPGNlD5Bjhi54qJE",
    authDomain: "rn-ecom-sore.firebaseapp.com",
    databaseURL: "https://rn-ecom-sore-default-rtdb.firebaseio.com",
    projectId: "rn-ecom-sore",
    storageBucket: "rn-ecom-sore.appspot.com",
    messagingSenderId: "1049153329219",
    appId: "1:1049153329219:web:e99afbdfddf4830b675cf6",
    measurementId: "G-B8H6CJRH89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export const database = firebase.database()