import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB-HAt3bVmSKSQgLWcjxz9YDsMM_Rs3FPA",
    authDomain: "olx-project-ed52b.firebaseapp.com",
    projectId: "olx-project-ed52b",
    storageBucket: "olx-project-ed52b.appspot.com",
    messagingSenderId: "985836958087",
    appId: "1:985836958087:web:7a5e363cd59b7d3ceda322"
  };



export default firebase.initializeApp(firebaseConfig);