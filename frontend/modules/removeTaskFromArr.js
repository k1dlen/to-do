import { arrObj } from "../script.js";
// import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function removeTaskFromArr(taskText) {
  const taskIndex = arrObj.findIndex(task => task.input === taskText);
  if (taskIndex !== -1) {
    arrObj.splice(taskIndex, 1);
    // saveToLocalStorage();   
  }
}
