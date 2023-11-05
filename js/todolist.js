const todoForm = document.querySelector("#todo-form")
const todoFormInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

let toDos = [];
const WILLTODO_KEY = "willToDo"

function saveToDos(){
    localStorage.setItem(WILLTODO_KEY,JSON.stringify(toDos));
}

function toDoRemove(event){
    const li = event.target.parentElement
    li.remove();
    toDos = toDos.filter((todo)=>todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(willToDo_Obj){
    const li = document.createElement("li")
    li.id = willToDo_Obj.id
    const button = document.createElement("button")
    button.innerText = `✅`
    const span = document.createElement("span")
    span.innerText = ` ${willToDo_Obj.text}`
    button.addEventListener("click", toDoRemove);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}

function onSubmitTodo(event){
    event.preventDefault();
    const willToDo = todoFormInput.value;
    todoFormInput.value = "";
    const willToDo_Obj = {
        text : willToDo,
        id : Date.now()
    };  
    toDos.push(willToDo_Obj);
    paintToDo(willToDo_Obj)
    saveToDos();
}

todoForm.addEventListener("submit", onSubmitTodo)

const savedToDos = localStorage.getItem(WILLTODO_KEY)
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
} 