require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer.js');
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); That´s how I would do it manually

console.clear();

const main = async () => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        usrEnter = await pausa();
        // console.log(usrEnter);
    } while ( opt !==  '0');


}

main();