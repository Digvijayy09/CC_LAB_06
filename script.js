/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function renderTask(doc) {
        let li = document.createElement("li");
        li.textContent = doc.data().task;
        li.setAttribute("data-id", doc.id);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            let id = li.getAttribute("data-id");
            db.collection("tasks").doc(id).delete();
        });
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
    
    addTaskBtn.addEventListener("click", function() {
        let task = taskInput.value.trim();
        if (task) {
            db.collection("tasks").add({ task });
            taskInput.value = "";
        }
    });
    
    db.collection("tasks").onSnapshot(snapshot => {
        taskList.innerHTML = "";
        snapshot.docs.forEach(doc => {
            renderTask(doc);
        });
    });
});
