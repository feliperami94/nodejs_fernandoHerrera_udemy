const { saveDB } = require("../helpers/dbActions");
const Tarea = require("./tarea");


class Tareas {

    _listado = {};

    get listArray() {
        const list = [];
        Object.keys(this._listado).forEach(key => {
            const task = this._listado[key];
            list.push(task);
        })

        return list;
    }

    constructor() {
        this._listado = {};
    }

    loadTasksFromArray(tasks = []){
        
        tasks.forEach(task => {
            this._listado[task.id] = task;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        //Here should be saving in the DB
    }


}

module.exports = Tareas;