import { Task } from './classes/Task.js';

const taskArray = (() => {
    const tasks = [];

    function add(object) {
        tasks.push(object);
    }

    function read() {
        return tasks;
    }

    return { add, read };
})();

function createTask() {
    let name = document.getElementById('name').value;
    let currentDate = new Date();
    let date = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
    let description = document.getElementById('description').value;
    let status = 'unchecked';

    const newTask = new Task(name, date, description, status);

    taskArray.add(newTask);

    listTasks(true);
}

const main = document.getElementById('main');
function listTasks(status) {
    if (!!taskArray.read().length) {
        let taskHtml = '';
        main.innerHTML = taskHtml;
        taskArray.read().forEach((task, index) => {
            if (status === true || task.getStatus() === 'unchecked') {
                taskHtml += `
                    <div class="card">
                        <h2>${task.getName()}</h2>
                        <h4>Data de criação: ${task.getDate()} </h4>
                        <p>${task.getDescription()}</p>
                        <div class="markCompletedContainer">
                            <input type="checkbox" class="markCompleted" id="${index}" ${task.getStatus() === 'checked' ? 'checked' : ''}>
                            <label for="${index}">Concluída</label>
                        </div>
                    </div>
                `;
            }
        });
        main.innerHTML = taskHtml;
        updateStatus();
    }
}

const btnShowCreateTaskScreen = document.getElementById('btnShowCreateTaskScreen');
const createTaskContainer = document.getElementById('createTaskContainer');
const formContainer = document.getElementById('formContainer');

btnShowCreateTaskScreen.addEventListener('click', () => {
    createTaskContainer.style.display = 'flex';
    createTaskContainer.style.zIndex = '1';
});

createTaskContainer.addEventListener('click', (event) => {
    if (!formContainer.contains(event.target)) {
        createTaskContainer.style.display = 'none';
        createTaskContainer.style.zIndex = '-1';
    }
});

const btnSortPending = document.getElementById('btnSortPending');
const btnAllTasks = document.getElementById('btnAllTasks');

btnSortPending.addEventListener('click', () => {
    btnSortPending.style.display = 'none';
    btnAllTasks.style.display = 'block';
    listTasks(false);
});

btnAllTasks.addEventListener('click', () => {
    btnSortPending.style.display = 'block';
    btnAllTasks.style.display = 'none';
    listTasks(true);
});

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    createTask();
    createTaskContainer.style.display = 'none';
    createTaskContainer.style.zIndex = '-1';
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
});

function updateStatus() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', function(event) {
            const id = event.target.id;
            if (event.target.checked) {
                taskArray.read()[id].setStatus('checked');
            } else {
                taskArray.read()[id].setStatus('unchecked');
            }
        });
    });
};