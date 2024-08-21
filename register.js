import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";
const email = document.querySelector('#email');
const password = document.querySelector("#password") 
const userName = document.querySelector("#Username") 
const form = document.querySelector('form')



form.addEventListener('submit' , (event)=>{
event.preventDefault();

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
   

alert('register successfull')
window.location = "login.html";


  })
  .catch((error) => {
    const errorMessage = error.message;
alert(errorMessage)  
});
});