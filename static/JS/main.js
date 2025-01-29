import {Tarefa} from './classes/tarefa.js';


//Criar tarefas e adicioná-las a lista principal
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
//-----------------------------------------

//Listar as tarefas com base no filtro todas/unchecked
const main = document.getElementById('main');

function listarTarefas(status){
    if(!!tarefas.length){
        if(status === true){
            let htmlTarefas = '';
            main.innerHTML = htmlTarefas;
            tarefas.forEach((tarefa, index) => {
                htmlTarefas += `
                    <div class="card">
                        <h2>${tarefa.getNome()}</h2>
                        <h4>Data de criação: ${tarefa.getData()} </h4>
                        <p>${tarefa.getDescricao()}</p>
                        <div class="marcarConcluidaContainer">
                            <input type="checkbox" class="marcarConcluida" id="${index}">
                            <label for="${index}">Marcar como Concluída</label>
                        </div>
                    </div>
                `;
            });
            main.innerHTML = htmlTarefas;
        }else{
            let htmlTarefas = '';
            main.innerHTML = htmlTarefas;
            tarefas.forEach((tarefa, index) => {
                if(tarefa.getStatus() == 'unchecked'){
                    htmlTarefas += `
                        <div class="card">
                            <h2>${tarefa.getNome()}</h2>
                            <h4>Data de criação: ${tarefa.getData()} </h4>
                            <p>${tarefa.getDescricao()}</p>
                            <div class="marcarConcluidaContainer">
                                <input type="checkbox" class="marcarConcluida" id="${index}">
                                <label for="${index}">Marcar como Concluída</label>
                            </div>
                        </div>
                    `;
                }
            });
            main.innerHTML = htmlTarefas;
        }
        atualizarStatus();
    }
}
//---------------------------------

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

//Verifica quando uma nova tarefa e enviada, aciona função de criação, esconde e limpa o formulário
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    criarTarefa();
    criarTarefaContainer.style.display = 'none';
    criarTarefaContainer.style.zIndex = '-1';
    document.getElementById('name').value = '';
    document.getElementById('descricao').value = '';
});
//-------------------------------------

//Atualiza o status da tarefa (checked/unchecked)
function atualizarStatus(){
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', function(event) {
            const id = event.target.id;
            if (event.target.checked) {
                tarefas[id].setStatus('checked');
                console.log(tarefas[id]);
            } else {
                tarefas[id].setStatus('unchecked');
                console.log(tarefas[id]);
            }
        });
    });
};