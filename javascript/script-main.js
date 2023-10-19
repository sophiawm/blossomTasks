


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
        addToDoBotton.setAttribute("data-bs-dismiss", "form");
        addToDoBotton.click();
            (() => {
            addToDoBotton.setAttribute("data-bs-dismiss", "");
            })();
    }
};

    /*const groupOption = groupSelection.options[groupSelection.selectedIndex];
    const attrsOption = groupOption.attributes;
    data["group"] = attrsOption;
    */


let data = [];

let acceptData = () => {
  data.push({
    text: textInput.value,
    description: descriptionInput.value,
    group: groupSelection.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);

  createTasks();
};

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
      return (tasks.innerHTML += `
        <div id=${y} class="list-item-container">
            <div id="list-box-structure">
            <div id="todo-first-line">
                <label class="checkbox-container">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <h4 id="task-item-text">${x.text}</h4>
            </div>
            <p id="description-item-text">${x.description}</p>
            <p id="group-task-item">${x.group}</p>
            </div>
            <div id="todo-line-icons"> 
                <img onclick="editTask(this)" data-bs-toggle="form" data-bs-target="#form" id="edit-icon" src="images/icons/edit-icon.png" alt="edit-icon">
                <img onclick="deleteTask(this)" id="delete-icon" src="images/icons/delete-icon.png" alt="delete-icon">
            </div>
        </div>
      `);
    });
  
    resetForm();
  };




let deleteTask = (e) =>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};

let editTask = (e) => {
    let taskTitleDetail = document.getElementById("task-item-text");
    let taskDescriptionDetail = document.getElementById("description-item-text");
    let taskGroupDetail = document.getElementById("group-task-item");
  
    textInput.value = taskTitleDetail.innerHTML;
    descriptionInput.value = taskDescriptionDetail.innerHTML;
    groupSelection.value = taskGroupDetail.innerHTML;
  
    deleteTask(e);
  };

let resetForm = ()=>{
    textInput.value = textInput.placeholder;
    descriptionInput.value  = descriptionInput.placeholder;
    groupSelection.value  = " ";
};

