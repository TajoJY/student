const loginForm = document.querySelector("#login-form");
const loginFormInput = loginForm.querySelector("input");    
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmitLogin);
} else {
    paintGreeting(savedUserName);
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hola👋 ${username}! How are you today?`
}

function onSubmitLogin(event){
    event.preventDefault();
    const username = loginFormInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    loginForm.classList.add(HIDDEN_CLASSNAME)
}

