<<<<<<< HEAD
import { arrObj } from "../script.js";
// import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function removeTaskFromArr(taskText) {
  const taskIndex = arrObj.findIndex(task => task.input === taskText);
  if (taskIndex !== -1) {
    arrObj.splice(taskIndex, 1);
    // saveToLocalStorage();   
  }
}
=======
import { saveToLocalStorage } from "./saveToLocalStorage.js";
import { arrObj } from "../script.js";

export function removeTaskFromArr(taskText) {
    arrObj = arrObj.filter(task => task.input !== taskText);
    saveToLocalStorage();
  }
>>>>>>> 8043a2ee31bdd6a08b0688b37b582f4fa52374d8
