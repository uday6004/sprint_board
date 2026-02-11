function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Create the task card
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerText = taskText;

    // Logic to move the task when clicked
    taskCard.onclick = function() {
        moveTask(taskCard);
    };

    // Add to the 'To Do' column initially
    document.getElementById('todo').querySelector('.task-list').appendChild(taskCard);

    // Clear input
    input.value = '';
}

function moveTask(task) {
    const currentColumn = task.parentElement.parentElement.id;
    
    if (currentColumn === 'todo') {
        document.getElementById('doing').querySelector('.task-list').appendChild(task);
    } else if (currentColumn === 'doing') {
        document.getElementById('done').querySelector('.task-list').appendChild(task);
    } else {
        task.remove(); // Delete if clicked in the 'Done' column
    }
}