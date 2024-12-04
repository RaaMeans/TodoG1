document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".text");
    const addButton = document.querySelector(".add");
    const taskList = document.querySelector(".task-list");

    addButton.addEventListener("click", () => {
        const taskValue = input.value.trim();
        if (taskValue) {
            addTask(taskValue);
            input.value = "";
        }
    });

    function addTask(task) {
        const li = document.createElement("li");
    
        const taskText = document.createElement("span");
        taskText.textContent = task;
    
        const completeButton = document.createElement("button");
        completeButton.type = "button"; // Prevent default behavior
        completeButton.innerHTML = "✔";
        completeButton.className = "complete";
        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
    
        const removeButton = document.createElement("button");
        removeButton.type = "button"; // Prevent default behavior
        removeButton.innerHTML = "🗑️";
        removeButton.className = "remove";
        removeButton.addEventListener("click", () => {
            li.remove();
        });
    
        li.append(taskText, completeButton, removeButton);
        taskList.appendChild(li);
    }
    
});
