// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Xn8_8Kbdzih6lqt5-zCo3JHfsT4swk8",
  authDomain: "domflim-5f779.firebaseapp.com",
  projectId: "domflim-5f779",
  storageBucket: "domflim-5f779.appspot.com",
  messagingSenderId: "453114844274",
  appId: "1:453114844274:web:4139932d7004ea08ed1eeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)