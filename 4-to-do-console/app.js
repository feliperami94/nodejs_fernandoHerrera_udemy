require('colors');
const { inquirerMenu,
    pausa,
    readInput,
    listDeleteTask,
    confirm } = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');
const { saveDB, readDB } = require('./helpers/dbActions')
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); That´s how I would do it manually


console.clear();

const main = async () => {
    let opt = '';

    const tasks = new Tareas();
    const tasksDB = readDB();

    if (tasksDB) {
        // console.log('tasks are:', tasksDB)
        tasks.loadTasksFromArray(tasksDB);

    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.crearTarea(desc);
                break;
            case '2':
                tasks.listTasks();
                break;
            case '3':
                tasks.listCompletedPending(true);
                break;
            case '4':
                tasks.listCompletedPending(false);
                break;
            case '6':
                const id = await listDeleteTask(tasks.listArray);
                if (id !== '0'){
                    const userConfirmation = await confirm('Are you sure? ');
                    if (userConfirmation){
                        tasks.deleteTask(id);
                        console.log('Task deleted');
                    }
                }
                break;
            default:
                break;
        }

        saveDB(tasks.listArray);


        await pausa();
    } while (opt !== '0');


}

main();