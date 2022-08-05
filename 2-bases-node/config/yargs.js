const argv = require("yargs")
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true, //obliga a tener que pasar el parametro
                describe: `It´s the base to multiply`   
              })
              .option('l', {
                alias: 'list',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: `Show the operations list in console`
              })
              .option('h', {
                alias: 'hasta',
                type:'number',
                demandOption: false,
                default: 10,
                describe: 'Limits the operations up to a max number. By default it is 10.'
              })
              .check((argv, options) =>{
                  if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                  }
                  return true;
              })
              .argv;

module.exports = argv;