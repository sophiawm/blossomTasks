/*  Dropdown menu */
function dropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}
/* Form connection */
let taskForm = document.getElementById("new-todo-form");
let textInput = document.getElementById("task-form");
let descriptionInput = document.getElementById("description-form");
let groupSelection = document.getElementById("group-options");
let msgTaskInput = document.getElementById("msg-task-form");
let addToDoBotton = document.getElementById("add-todo");

let tasks = document.getElementById("list-container");


taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskFormValidation();
});

let taskFormValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msgTaskInput.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msgTaskInput.innerHTML = "";
        acceptData();
    }
};

    /*const groupOption = groupSelection.options[groupSelection.selectedIndex];
    const attrsOption = groupOption.attributes;
    data["group"] = attrsOption;
    */


let data = {};

let acceptData = () => {
    data["text"] = textInput.value;
    data["description"] = descriptionInput.value;
    data["group"] = groupSelection.value;
    createTasks();
    add-todo.setAttribute
};

let createTasks = () => {
    tasks.innerHTML += `
    <div class="list-item-container">
        <div id="list-box-structure">
            <div id="todo-first-line">
                <div id="todo-line-task">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <h4 id="task-item-text">${data.text}</h4>
                </div>
            </div>
            <p id="description-item-text">${data.description}</p>
            <p id="group-task-item">${data.group}</p>
        </div>
        <div id="todo-line-icons"> 
            <img id="edit-icon" src="images/icons/edit-icon.png" alt="edit-icon">
            <img id="delete-icon" src="images/icons/delete-icon.png" alt="delete-icon">
        </div>
    </div>
    `;
    
    resetForm();
};

let resetForm = ()=>{
    textInput.value = textInput.placeholder;
    descriptionInput.value  = descriptionInput.placeholder;
    groupSelection.value  = " ";
}