const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true, //obliga a tener que pasar el parametro

              })
              .option('l', {
                alias: 'list',
                type: 'boolean',
                demandOption: true,
                default: false,
              })
              .check((argv, options) =>{
                  if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                  }
                  return true;
              })
              .argv;

console.clear();

// const [, , arg3 = "base=5"] = process.argv; //Así se puede desestructurar los 'process.argv' argumentos de ejecucion del script
// const [, base = 5] = arg3.split("=");
// console.log(base); //aqui se extrajo la variable del argumento base

console.log(argv);////////FORMA CORRECTA DE HACER EL CODIGO DE LAS TRES LINEAS ANTERIORES
console.log(argv.base); //Puedo acceder a las propiedades del yargs con el nombre o alias

// const base = 5;

crearArchivo(argv.base, argv.list)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))
