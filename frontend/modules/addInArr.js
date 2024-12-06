import { postTask } from "../fetch/postTask.js";
// import { arrObj } from "../script.js";
// import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function addInArr(inputText) {

  console.log(inputText);
  postTask({input: inputText})
}
