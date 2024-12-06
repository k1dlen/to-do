import { saveToLocalStorage } from "./saveToLocalStorage.js";
import { arrObj } from "../script.js";

export function removeTaskFromArr(taskText) {
    arrObj = arrObj.filter(task => task.input !== taskText);
    saveToLocalStorage();
  }