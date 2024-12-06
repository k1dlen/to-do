import { createCompleteButton } from "./createCompleteButton.js";
import { createDeleteButton } from "./createDeleteButton.js";

export function createTaskItem(taskText, completed) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("todo-item");
  
    const taskLabel = document.createElement("span");
    taskLabel.innerText = taskText;
    taskLabel.classList.add("todo-task");
    if (completed) {
      taskLabel.classList.add("completed");
    }
  
    const completeButton = createCompleteButton(taskLabel, taskText);
    const deleteButton = createDeleteButton(taskItem, taskText);
  
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
  
    return taskItem;
  }
  