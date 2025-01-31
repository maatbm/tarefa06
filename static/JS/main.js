const arrayTasks = [];

function createTask() {
    let name = document.getElementById('name').value;
    let currentDate = new Date();
    let date = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
    let description = document.getElementById('description').value;

    const newTask = {name: name, date: date, description: description, status: 'unchecked'}

    arrayTasks.push(newTask);

    listTasks(true);
}

const main = document.getElementById('main');
function listTasks(status) {
    if (!!arrayTasks.length) {
        let taskHtml = '';
        main.innerHTML = taskHtml;
        arrayTasks.forEach((task, index) => {
            if (status === true || task.status === 'unchecked') {
                taskHtml += `
                    <div class="card">
                        <h2>${task.name}</h2>
                        <h4>Data de criação: ${task.date} </h4>
                        <p>${task.description}</p>
                        <div class="markCompletedContainer">
                            <input type="checkbox" class="markCompleted" id="${index}" ${task.status === 'checked' ? 'checked' : ''}>
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
                arrayTasks[id].status = 'checked';
                console.log(arrayTasks[id]);
            } else {
                arrayTasks[id].status = 'unchecked';
                console.log(arrayTasks[id]);
            }
        });
    });
};