const taskList = document.getElementById("taskList");
const addButton = document.querySelector(".addButton");
// Quand le bouton est cliqué on appelle la fonction addTask
addButton.onclick = addTask;

function addTask(event) {
    event.preventDefault();
    // Récupération + stockage valeur saisie
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Veuillez saisir une tâche à ajouter");
        return;
    }

    const newTask = document.createElement("li");
    // Ajout de la valeur saisie dans li
    newTask.textContent = taskValue;
    // Création des boutons pour cette tâche
    const buttonsTask = createButtonsTask(newTask);
    // Ajout des boutons à la tâche
    newTask.appendChild(buttonsTask);
    // Ajout de la tâche à la liste ul
    taskList.appendChild(newTask);
    taskInput.value = "";
}

const editTask = (task) => {
    const newValue = prompt("Modifier la tâche:", task.textContent);
    if (newValue !== null) {
        // MAJ de la tâche avec la nouvelle valeur
        task.textContent = newValue;
        // On recrée les boutons
        const buttonsTask = createButtonsTask(task);
        // Ajout des boutons à la tâche
        task.appendChild(buttonsTask);
    }
};
const deleteTask = (task) => {
    task.remove();
};

const createButtonsTask = (task) => {
    const buttonsContainer = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.innerHTML = `<img src="assets/updateIcon.png">`;
    // Appel de la fonction editTask au clic sur le bouton
    editButton.onclick = function () {
        editTask(task);
    };

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<img src="assets/deleteIcon.png">`;
    // Appel de la fonction deleteTask au clic sur le bouton
    deleteButton.onclick = function () {
        deleteTask(task);
    };
    // Ajout du bouton dédition au container
    buttonsContainer.appendChild(editButton);
    // Ajout du bouton de suppression au container
    buttonsContainer.appendChild(deleteButton);
    return buttonsContainer;
};
