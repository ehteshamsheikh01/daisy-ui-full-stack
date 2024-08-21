
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCzz9qcBPMeAmeuNAAM_azLSf1WL5MWQ1s",
  authDomain: "full-stack-app-9bc36.firebaseapp.com",
  projectId: "full-stack-app-9bc36",
  storageBucket: "full-stack-app-9bc36.appspot.com",
  messagingSenderId: "80998579431",
  appId: "1:80998579431:web:249938662798f409f47642",
  measurementId: "G-4HJHY6PWZ6"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);