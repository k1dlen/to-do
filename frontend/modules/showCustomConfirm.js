export function showCustomConfirm(onConfirm) {
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