<<<<<<< HEAD
import { arrObj } from "../script.js";

export function updateTaskStatus(taskText, isCompleted) {
  const taskIndex = arrObj.findIndex(task => task.input === taskText);
  if (taskIndex !== -1) {
    arrObj[taskIndex].completed = isCompleted;
    // saveToLocalStorage();
  }
}
=======
import { saveToLocalStorage } from "./saveToLocalStorage.js";
import { arrObj } from "../script.js";

export function updateTaskStatus(taskText, isCompleted) {
    const taskIndex = arrObj.findIndex(task => task.input === taskText);
    if (taskIndex !== -1) {
      arrObj[taskIndex].completed = isCompleted;
      saveToLocalStorage();
    }
  }
>>>>>>> 8043a2ee31bdd6a08b0688b37b582f4fa52374d8
