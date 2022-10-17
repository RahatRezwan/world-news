// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBAsIRLPyilmN1TTbjTFTePFLE95EgY5sM",
   authDomain: "world-news-a331c.firebaseapp.com",
   projectId: "world-news-a331c",
   storageBucket: "world-news-a331c.appspot.com",
   messagingSenderId: "361362251497",
   appId: "1:361362251497:web:91ab557a73240ff03d5a78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
