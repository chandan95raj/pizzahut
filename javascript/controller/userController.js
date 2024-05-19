import USERSERVICES from "../services/userServices"
window.addEventListener("DOMContentLoaded", bindEvents);

function bindEvents() {
    document.getElementById("signupForm").addEventListener("submit",signup)
}

function signup(e){
    e.preventDefault();
    console.log(this.username.value);
    USERSERVICES.register();
}