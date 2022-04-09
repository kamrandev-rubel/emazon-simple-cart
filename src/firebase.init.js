// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd41OeBKoV6Q8_68Kq_NYIRv6GOzRR2-E",
    authDomain: "emazon-simple-site.firebaseapp.com",
    projectId: "emazon-simple-site",
    storageBucket: "emazon-simple-site.appspot.com",
    messagingSenderId: "1075062414165",
    appId: "1:1075062414165:web:1f87a33cc150c18a462ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;