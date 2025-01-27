let todos = JSON.parse(localStorage.getItem("todos")) || ["Add your first todo!"] // Sets a default value if localstorage value is equal to null
const list = document.getElementById("todoList");

function updateList(newTodo) {
    if (newTodo !== "") {
        const todoElement = document.createElement("li");
        todoElement.innerHTML = `${newTodo}<button class="removeButton">X</button>`;
        list.appendChild(todoElement);
    }
}

function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function addTodo() {
    const todoInput = prompt("Add to the list: ");
    if (todoInput) {
        todos.push(todoInput);
        updateList(todoInput);
        updateLocalStorage()
    }
}

list.addEventListener("click", (event) => { // Remove button listener
    if (event.target.classList.contains("removeButton")) {
        const todoElement = event.target.parentElement
        const todoText = todoElement.textContent.slice(0, -1) // Remove the last letter X in the string
        todos = todos.filter(todo => todo !== todoText); // if false then todo is removed if true todo is kept
        list.removeChild(todoElement)
        updateLocalStorage()
    }
});

todos.forEach(updateList);

document.getElementById("addButton").addEventListener("click", addTodo);