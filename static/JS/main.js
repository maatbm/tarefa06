import './classes/tarefa.js';

const main = document.getElementById('main');
const tarefas = [];


//Exibir e ocultar o formulário para criação de novas tarefas
const btnExibirTelaCriarTarefa = document.getElementById('btnExibirTelaCriarTarefa');
const criarTarefaContainer = document.getElementById('criarTarefaContainer');
const formContainer = document.getElementById('formContainer');

btnExibirTelaCriarTarefa.addEventListener('click', () => {
    criarTarefaContainer.style.display = 'flex';
    criarTarefaContainer.style.zIndex = '1';
});

criarTarefaContainer.addEventListener('click', (event) => {
    if (!formContainer.contains(event.target)) {
        criarTarefaContainer.style.display = 'none';
        criarTarefaContainer.style.zIndex = '-1';
    }
});
//--------------------------------

//Botões para ordenar as tarefas de acordo com o status
const btnOrdenarPendentes = document.getElementById('btnOrdenarPendentes');
const btnTodasTarefas = document.getElementById('btnTodasTarefas');

btnOrdenarPendentes.addEventListener('click', () => {
    btnOrdenarPendentes.style.display = 'none';
    btnTodasTarefas.style.display = 'block';
});

btnTodasTarefas.addEventListener('click', () => {
    btnOrdenarPendentes.style.display = 'block';
    btnTodasTarefas.style.display = 'none';
});
//------------------------------------