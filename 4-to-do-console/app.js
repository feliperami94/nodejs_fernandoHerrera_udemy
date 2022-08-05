require('colors');
const { inquirerMenu, 
    pausa, 
    readInput} = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');
const { saveDB} = require('./helpers/saveFile')
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); That´s how I would do it manually


console.clear();

const main = async () => {
    let opt = '';

    const tasks = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.crearTarea( desc );
                break;
            case '2':
                console.log(tasks.listArray);
                break;
            default:
                break;
        }

        // saveDB(tasks.listArray);

        await pausa();

    } while (opt !== '0');


}

main();