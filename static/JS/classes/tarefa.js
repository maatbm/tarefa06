export class Tarefa {
    constructor(nome, data, descricao, status) {
        this.nome = nome;
        this.data = data;
        this.descricao = descricao
        this.status = status;
    }

    getNome() {
        return this.nome;
    }

    getData() {
        return this.data;
    }

    getDescricao(){
        return this.descricao;
    }

    getStatus() {
        return this.status;
    }
}