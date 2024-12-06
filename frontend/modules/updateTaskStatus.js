import { arrObj } from "../script.js";
import { UpdateTask } from "../fetch/updateTask.js";
import { PatchTask } from "../fetch/patchTask.js";

export function updateTaskStatus(taskText, isCompleted) {
  console.log(taskText);
  console.log(isCompleted);
  const task_id = arrObj.find(task => task.input === taskText).id;
  PatchTask({
    id: task_id,
    completed: isCompleted,
  })
  location.reload()
}