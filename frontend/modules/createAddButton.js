import { addTask } from "./addTask.js";
import { addInArr } from "./addInArr.js";

export function createAddButton(input) {
    const addButton = document.createElement("button");
    addButton.innerText = "Добавить";
    addButton.classList.add("todo-add-button");
    addButton.style.flex = "0 0 100px";
  
    addButton.onclick = () => {
      if (input.value.trim()) {
        addTask(input.value, false);
        addInArr(input.value);
        input.value = "";
      }
    };
    return addButton;
  }