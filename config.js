import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDwkvtCe_JlWxuJ7O0LIJfho-4Nu3GDo8k",
  authDomain: "wireless-buzzer-825e5.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-825e5-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-825e5",
  storageBucket: "wireless-buzzer-825e5.appspot.com",
  messagingSenderId: "1073757182958",
  appId: "1:1073757182958:web:a0bd9f3b40b6a45c5b4cff",
  measurementId: "G-HSKZ4MGJEL"
};
firebase.initializeApp(firebaseConfig)

  export default firebase.database()
 

  