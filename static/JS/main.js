import './classes/tarefa.js';

const main = document.getElementById('main')
const tarefas = [];




const btnExibirTelaCriarTarefa = document.getElementById('btnExibirTelaCriarTarefa');

btnExibirTelaCriarTarefa.addEventListener('click', () => {
    
});

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