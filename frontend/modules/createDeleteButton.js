import { showCustomConfirm } from "./showCustomConfirm.js";
import { removeTaskFromArr } from "./removeTaskFromArr.js";

export function createDeleteButton(taskItem, taskText) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✖️";
    deleteButton.classList.add("delete-button");
  
    deleteButton.onclick = () => {
      showCustomConfirm(() => {
        taskItem.remove();
        removeTaskFromArr(taskText);
      });
    };
  
    return deleteButton;
  }