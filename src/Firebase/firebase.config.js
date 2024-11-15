// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWEsHz-5EafKncV7iXjOaXt_4gz1Pfm9I",
  authDomain: "dragon-news-ed90a.firebaseapp.com",
  projectId: "dragon-news-ed90a",
  storageBucket: "dragon-news-ed90a.firebasestorage.app",
  messagingSenderId: "135038793067",
  appId: "1:135038793067:web:7b19110ad14c8abd8c882e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;