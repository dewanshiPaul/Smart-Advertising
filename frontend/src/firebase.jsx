import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1iksHtbrqkcg8aHxlmuxIWXVxgMfrZq8",
    authDomain: "yt-face.firebaseapp.com",
    projectId: "yt-face",
    storageBucket: "yt-face.appspot.com",
    messagingSenderId: "1021196935955",
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()