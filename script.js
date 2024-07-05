function loadTasks() {
    fetch('http://localhost:3000/tarefas')
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('task-list');
            data.forEach(task => {
                const li = document.createElement('li');
                const span = document.createElement('span');
                span.textContent = task.tarefa;
                li.appendChild(span);

                const completeButton = document.createElement('button');
                completeButton.innerHTML = '&#10004;';
                completeButton.classList.add('complete');
                completeButton.addEventListener('click', function() {
                    li.classList.toggle('completed');
                });
                li.appendChild(completeButton);

                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = '&#10006;';
                deleteButton.classList.add('delete');
                deleteButton.addEventListener('click', function() {
                    taskList.removeChild(li);
                });
                li.appendChild(deleteButton);

                taskList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao buscar tarefas:', error));
}

document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '&#10004;';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#10006;';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    document.getElementById('new-task').value = '';
});
