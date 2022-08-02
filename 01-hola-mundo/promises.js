const empleados = [
  {
    id: 1,
    nombre: `Fernando`,
  },
  {
    id: 2,
    nombre: `Linda`,
  },
  {
    id: 3,
    nombre: `Karen`,
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    (empleado)
      ? resolve(empleado)
      : reject(`No existe empleado con id ${id}`);

  });

};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {

        const salario = salarios.find(sal =>sal.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`El salario del id ${id} no existe`);
    })
}

const id = 3;

getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch( err => console.log(err));

  getSalario(id)
  .then( salario => console.log(salario))
  .catch(err => console.log(err));