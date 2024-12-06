export function createInputField() {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Введите новую задачу...";
    input.classList.add("todo-input");
    input.style.flex = "1";
    return input;
  }