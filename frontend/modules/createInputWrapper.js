import  { createInputField } from "./createInputField.js";
import  { createAddButton } from "./createAddButton.js";

export function createInputWrapper() {
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
  
    const input = createInputField();
    const addButton = createAddButton(input);
  
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(addButton);
    return inputWrapper;
  }