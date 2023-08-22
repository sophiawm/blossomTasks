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
    console.log(data);
};
