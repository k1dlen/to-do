import  { createTaskItem } from "./createTaskItem.js";

export function addTask(taskText, completed = false) {
    const todoList = document.querySelector(".todo-list");
    const taskItem = createTaskItem(taskText, completed);
    todoList.appendChild(taskItem);
  }