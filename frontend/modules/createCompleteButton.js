import { updateTaskStatus } from "./updateTaskStatus.js";

export function createCompleteButton(taskLabel, taskText) {
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "✔️";
    completeButton.classList.add("complete-button");
  
    completeButton.onclick = () => {
      taskLabel.classList.toggle("completed");
      updateTaskStatus(taskText, taskLabel.classList.contains("completed"));
    };
  
    return completeButton;
  }