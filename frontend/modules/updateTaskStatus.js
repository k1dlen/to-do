import { arrObj } from "../script.js";

export function updateTaskStatus(taskText, isCompleted) {
  const taskIndex = arrObj.findIndex(task => task.input === taskText);
  if (taskIndex !== -1) {
    arrObj[taskIndex].completed = isCompleted;
    // saveToLocalStorage();
  }
}
