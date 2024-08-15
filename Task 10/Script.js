let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = '';
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, Index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onClick = () => removeTask(Index);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function removeTask(Index) {
    tasks.splice(Index, 1);
    displayTasks();
}