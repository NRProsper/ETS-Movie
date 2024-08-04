// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdjKvxaj5xf8zv6ObqALD-VGICeodL-7M",
    authDomain: "fir-movie-213ea.firebaseapp.com",
    projectId: "fir-movie-213ea",
    storageBucket: "fir-movie-213ea.appspot.com",
    messagingSenderId: "996164964139",
    appId: "1:996164964139:web:8806e91fbf9f32a792ff6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
