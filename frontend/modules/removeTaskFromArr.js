import { DeleteTask } from "../fetch/deleteTask.js";
import { arrObj } from "../script.js";
// import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function removeTaskFromArr(taskText) {
  const task_id = arrObj.find(task => task.input === taskText).id;
  console.log(task_id);
  DeleteTask(task_id);
  location.reload();
}