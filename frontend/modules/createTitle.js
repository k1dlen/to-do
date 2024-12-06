export function createTitle() {
    const title = document.createElement("h2");
    title.innerText = "To-do List";
    title.classList.add("todo-title");
    return title;
  }