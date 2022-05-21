const loginCon = document.querySelector(".login-container");
const loginForm = loginCon.querySelector("form");
const loginInput = loginCon.querySelector("input");
const todolistCon = document.querySelector(".todolist-container");
const todoUsername = todolistCon.querySelector("h1")


const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const saveName = localStorage.getItem(USERNAME_KEY);


function submitHandler(event){
    event.preventDefault();
    loginCon.classList.add(HIDDEN);
    todolistCon.classList.remove(HIDDEN);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    todoUsername.innerText = loginInput.value;
}


if(saveName === null){
    loginForm.addEventListener("submit", submitHandler);
}else{
    todoUsername.innerText = saveName;
    loginCon.classList.add(HIDDEN);
    todolistCon.classList.remove(HIDDEN);
    
}

loginForm.addEventListener("submit", submitHandler);

