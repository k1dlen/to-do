import { createContainer } from "./modules/createContainer.js";
import { createTitle } from "./modules/createTitle.js";
import { createInputWrapper } from "./modules/createInputWrapper.js";
import  { createInputField } from "./modules/createInputField.js";
import  { createAddButton } from "./modules/createAddButton.js";
import { createTodoList } from "./modules/createTodoList.js";
import { addTask } from "./modules/addTask.js";
import  { createTaskItem } from "./modules/createTaskItem.js";
import { createCompleteButton } from "./modules/createCompleteButton.js";
import { updateTaskStatus } from "./modules/updateTaskStatus.js";
import { createDeleteButton } from "./modules/createDeleteButton.js";
import { removeTaskFromArr } from "./modules/removeTaskFromArr.js";
import { showCustomConfirm } from "./modules/showCustomConfirm.js";
import { addInArr } from "./modules/addInArr.js";
import { getTask } from "./fetch/getTask.js";


export let arrObj = await getTask();
console.log(arrObj);


// if (localStorage.getItem("key")) {
//   arrObj = JSON.parse(localStorage.getItem("key"));
// }

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".todo-input");

  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && input.value.trim()) {
      addTask(input.value);
      addInArr(input.value);
      input.value = "";
    }
  });
});

function initApp() {
  const container = createContainer();
  const title = createTitle();
  const inputWrapper = createInputWrapper();
  const todoList = createTodoList();

  container.appendChild(title);
  container.appendChild(inputWrapper);
  container.appendChild(todoList);
  document.body.appendChild(container);

  arrObj.forEach(item => addTask(item.input, item.completed));
}

initApp();
