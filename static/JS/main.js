import {Tarefa} from './classes/tarefa.js';

const main = document.getElementById('main');
const form = document.getElementById('form');
const tarefas = [];

function criarTarefa(){ 
    let nome = document.getElementById('name').value;
    let dataAtual = new Date();
    let data = dataAtual.getDate() +'/'+ (dataAtual.getMonth()+1) + '/' + dataAtual.getFullYear();
    let descricao = document.getElementById('descricao').value;
    let status = 'unchecked';

    const novaTarefa = new Tarefa(nome, data, descricao, status);

    tarefas.push(novaTarefa);

    listarTarefas(true);
}

function listarTarefas(status){
    if(!!tarefas.length){
        if(status === true){
            let htmlTarefas = '';
            tarefas.forEach((tarefa) => {
                htmlTarefas += `
                    <div class="card">
                        <h2>${tarefa.getNome()}</h2>
                        <h4>Data: ${tarefa.getData()} </h4>
                        <p>${tarefa.getDescricao()}</p>
                        <div class="marcarConcluidaContainer">
                            <input type="checkbox" id="marcarConcluida" value="${tarefa.getStatus()}">
                            <label for="marcarConcluida">Marcar como Concluída</label>
                        </div>
                    </div>
                `;
            });
            main.innerHTML = htmlTarefas;
        }
    }
}

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
    listarTarefas(false);
});

btnTodasTarefas.addEventListener('click', () => {
    btnOrdenarPendentes.style.display = 'block';
    btnTodasTarefas.style.display = 'none';
    listarTarefas(true);
});
//------------------------------------

form.addEventListener('submit', (event) => {
    event.preventDefault();
    criarTarefa();
    criarTarefaContainer.style.display = 'none';
    criarTarefaContainer.style.zIndex = '-1';
    document.getElementById('name').value = '';
    document.getElementById('descricao').value = '';
});