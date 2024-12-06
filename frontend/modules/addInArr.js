import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function addInArr(inputText) {
    const arrAdd = {
      input: inputText,
      completed: false,
    };
    arrObj.push(arrAdd);
    saveToLocalStorage();
    console.log(arrObj);
  }
  