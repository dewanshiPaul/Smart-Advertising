import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    // apiKey: "AIzaSyC1iksHtbrqkcg8aHxlmuxIWXVxgMfrZq8",
    // authDomain: "yt-face.firebaseapp.com",
    // projectId: "yt-face",
    // storageBucket: "yt-face.appspot.com",
    // messagingSenderId: "1021196935955",
    // appId: "1:1021196935955:web:83efba8f4319564005f0e6"
    // apiKey: "AIzaSyB037H053t5_CmIb_CbKfQkexV8stsGPHs",
    // authDomain: "clone-engage.firebaseapp.com",
    // projectId: "clone-engage",
    // storageBucket: "clone-engage.appspot.com",
    // messagingSenderId: "623162855076",
    // appId: "1:623162855076:web:4e236c305b8f7fa8716031"
    // apiKey: "AIzaSyCyrrcyh5ySD5gmHb2B9WUxadx8GwRr6q4",
    // authDomain: "t3-d6d96.firebaseapp.com",
    // projectId: "t3-d6d96",
    // storageBucket: "t3-d6d96.appspot.com",
    // messagingSenderId: "1000993273148",
    // appId: "1:1000993273148:web:e3fc2dfe0f34bea2561a39"
    apiKey: "AIzaSyBy_myZVU_4zm4YVs8hkjpWR28hOChWQvw",
    authDomain: "new-project-3f032.firebaseapp.com",
    projectId: "new-project-3f032",
    storageBucket: "new-project-3f032.appspot.com",
    messagingSenderId: "404349456829",
    appId: "1:404349456829:web:781067292715226afc82d4"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()