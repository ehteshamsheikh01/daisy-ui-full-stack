import {  onAuthStateChanged ,  signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";

const buttonsDiv = document.querySelector('#buttons-div')
const avatarSection = document.querySelector('#avatar-section')
const logOut = document.querySelector('#log-out');

avatarSection.style.display = 'none';

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      buttonsDiv.style.display = 'none';
      avatarSection.style.display = 'block';
    } else {
        avatarSection.style.display = 'none';
        buttonsDiv.style.display = 'block';
    }
  });


logOut.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
      // console.log('log out suuccess');
        alert("log out successfull");
        buttonsDiv.style.display = 'block';
        window.location = './login.html'
      }).catch((error) => {
        alert(error)
      });
})
  