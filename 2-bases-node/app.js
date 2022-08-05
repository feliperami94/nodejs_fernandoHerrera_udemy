const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear();

// const [, , arg3 = "base=5"] = process.argv; //Así se puede desestructurar los 'process.argv' argumentos de ejecucion del script
// const [, base = 5] = arg3.split("=");
// console.log(base); //aqui se extrajo la variable del argumento base

console.log(argv);////////FORMA CORRECTA DE HACER EL CODIGO DE LAS TRES LINEAS ANTERIORES
console.log(argv.base); //Puedo acceder a las propiedades del yargs con el nombre o alias

// const base = 5;

crearArchivo(argv.base, argv.list, argv.hasta)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))
