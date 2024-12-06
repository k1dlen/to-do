<<<<<<< HEAD
import { postTask } from "../fetch/postTask.js";
// import { arrObj } from "../script.js";
// import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function addInArr(inputText) {

  console.log(inputText);
  postTask({input: inputText})
}
=======
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
  
>>>>>>> 8043a2ee31bdd6a08b0688b37b582f4fa52374d8
