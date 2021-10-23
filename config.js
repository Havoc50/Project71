import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyCSa3ev95CrBynSyJtV2jko4R9WtvXuA1M",
  authDomain: "complaint-forum-dda45.firebaseapp.com",
  projectId: "complaint-forum-dda45",
  storageBucket: "complaint-forum-dda45.appspot.com",
  messagingSenderId: "8283759697",
  appId: "1:8283759697:web:321da2c71f1fa4ea340470"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

