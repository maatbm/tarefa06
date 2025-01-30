export class Task {
    constructor(name, date, description, status) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.status = status;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.date;
    }

    getDescription() {
        return this.description;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}