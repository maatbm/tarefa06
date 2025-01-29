class tarefa {
    constructor(nome, data, status) {
        this.nome = nome;
        this.data = data;
        this.status = status;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}