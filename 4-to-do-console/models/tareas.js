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

    deleteTask(id = ''){

        if(this._listado[id]){
            delete this._listado[id]; 
        }
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

    listTasks(){
        console.log('\n');
        let i = 1;
        let isCompleted = "";
        for (const key in this._listado) {
            if(this._listado[key].completedIn === null){
                isCompleted = "Pending".red;
            } else{
                isCompleted = "Completed".green;
            }

            console.log(`${i}.`.green, `${this._listado[key].description} :: `, isCompleted)
            i++
        }
    }

    listCompletedPending(completed = true){
        console.log('\n');
        let index = 1;
        Object.keys(this._listado).forEach((key) =>
            {   
                let desc;
                let i;
                if(this._listado[key].completedIn !== null && completed === true){
                    i = `${index}.`.green;
                    desc = this._listado[key].description + " :: "+"Completed".green;
                } else if (this._listado[key].completedIn === null && completed === false) {
                    i = `${index}.`.red;
                    desc = this._listado[key].description + " :: "+"Pending".red;
                }
                if (i && desc){
                    console.log(i, desc);
                    index++
                }
            }
        )

    }

    toggleCompleted(ids = []){

        ids.forEach(id => {
            const task = this._listado[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString()
            }
        })

        this.listArray.forEach(task => {
            if(!ids.includes(task.id)){
                this._listado[task.id].completedIn = null
            }
        })

    }
}

module.exports = Tareas;