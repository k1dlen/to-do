import { arrObj } from "../script.js";

export function saveToLocalStorage() {
    localStorage.setItem("key", JSON.stringify(arrObj));
  }