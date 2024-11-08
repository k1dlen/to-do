let arrObj = [
  {
    input: "Задача 1",
    completed: true,
  },
  {
    input: "Задача 2",
    completed: true,
  },
  {
    input: "Задача 3",
    completed: false,
  }
];

if (localStorage.getItem("key")) {
  arrObj = JSON.parse(localStorage.getItem("key"));
}

function saveToLocalStorage() {
  localStorage.setItem("key", JSON.stringify(arrObj));
}

function addInArr(inputText) {
  const arrAdd = {
    input: inputText,
    completed: false,
  };
  arrObj.push(arrAdd);
  saveToLocalStorage();
  console.log(arrObj);
}

// Функция создания контейнера для приложения
function createContainer() {
  const container = document.createElement("div");
  container.classList.add("todo-container");
  return container;
}

// Функция создания заголовка
function createTitle() {
  const title = document.createElement("h2");
  title.innerText = "To-do List";
  title.classList.add("todo-title");
  return title;
}

// Функция создания обертки для поля ввода и кнопки добавления
function createInputWrapper() {
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input-wrapper");

  const input = createInputField();
  const addButton = createAddButton(input);

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(addButton);
  return inputWrapper;
}

// Функция создания поля ввода
function createInputField() {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Введите новую задачу...";
  input.classList.add("todo-input");
  input.style.flex = "1";
  return input;
}

// Функция создания кнопки добавления
function createAddButton(input) {
  const addButton = document.createElement("button");
  addButton.innerText = "Добавить";
  addButton.classList.add("todo-add-button");
  addButton.style.flex = "0 0 100px";

  addButton.onclick = () => {
    if (input.value.trim()) {
      addTask(input.value, false);
      addInArr(input.value);
      input.value = "";
    }
  };
  return addButton;
}

// Функция создания контейнера для списка задач
function createTodoList() {
  const todoList = document.createElement("ul");
  todoList.classList.add("todo-list");
  return todoList;
}

// Функция добавления новой задачи
function addTask(taskText, completed = false) {
  const todoList = document.querySelector(".todo-list");
  const taskItem = createTaskItem(taskText, completed);
  todoList.appendChild(taskItem);
}

// Функция создания элемента задачи
function createTaskItem(taskText, completed) {
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

// Функция создания кнопки завершения задачи
function createCompleteButton(taskLabel, taskText) {
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "✔️";
  completeButton.classList.add("complete-button");

  completeButton.onclick = () => {
    taskLabel.classList.toggle("completed");
    updateTaskStatus(taskText, taskLabel.classList.contains("completed"));
  };

  return completeButton;
}

// Функция обновления статуса задачи в массиве и localStorage
function updateTaskStatus(taskText, isCompleted) {
  const taskIndex = arrObj.findIndex(task => task.input === taskText);
  if (taskIndex !== -1) {
    arrObj[taskIndex].completed = isCompleted;
    saveToLocalStorage();
  }
}

// Функция создания кнопки удаления задачи
function createDeleteButton(taskItem, taskText) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "✖️";
  deleteButton.classList.add("delete-button");

  deleteButton.onclick = () => {
    showCustomConfirm(() => {
      taskItem.remove();
      removeTaskFromArr(taskText);
    });
  };

  return deleteButton;
}

// Функция удаления задачи из массива и localStorage
function removeTaskFromArr(taskText) {
  arrObj = arrObj.filter(task => task.input !== taskText);
  saveToLocalStorage();
}

// Функция показа кастомного подтверждения
function showCustomConfirm(onConfirm) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");

  const confirmMessage = document.createElement("p");
  confirmMessage.innerText = "Вы уверены, что хотите удалить задачу?";
  confirmMessage.classList.add("confirm-message");

  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Да";
  confirmButton.classList.add("confirm-button");
  confirmButton.onclick = () => {
    onConfirm();
    document.body.removeChild(overlay);
  };

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Нет";
  cancelButton.classList.add("cancel-button");
  cancelButton.onclick = () => {
    document.body.removeChild(overlay);
  };

  confirmBox.appendChild(confirmMessage);
  confirmBox.appendChild(confirmButton);
  confirmBox.appendChild(cancelButton);
  overlay.appendChild(confirmBox);
  document.body.appendChild(overlay);
}

// Обработка нажатия Enter для добавления задачи
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".todo-input");

  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && input.value.trim()) {
      addTask(input.value);
      addInArr(input.value);
      input.value = "";
    }
  });
});

// Функция инициализации приложения
function initApp() {
  const container = createContainer();
  const title = createTitle();
  const inputWrapper = createInputWrapper();
  const todoList = createTodoList();

  container.appendChild(title);
  container.appendChild(inputWrapper);
  container.appendChild(todoList);
  document.body.appendChild(container);

  arrObj.forEach(item => addTask(item.input, item.completed));
}

// Запуск
initApp();
