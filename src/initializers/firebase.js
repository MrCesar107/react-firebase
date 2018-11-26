import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD2h0xsTGtxPPNxQ-zpGOPY3JyvxXOUuOU",
  authDomain: "album-react-a86fe.firebaseapp.com",
  databaseURL: "https://album-react-a86fe.firebaseio.com",
  projectId: "album-react-a86fe",
  storageBucket: "album-react-a86fe.appspot.com",
  messagingSenderId: "438962433321"
};

firebase.initializeApp(config);

export default firebase;