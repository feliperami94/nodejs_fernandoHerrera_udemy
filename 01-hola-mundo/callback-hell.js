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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((sal) => sal.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario de empleado con id ${id} no existe`);
  }
};

const id = 1;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log(`Error!`);
    return console.log(err);
  }
  console.log(`Empleado existe!`);
  getSalario(id, (err, salario) => { //Example of a simple callback hell 
    if (err) {
      console.log(`Error!`);
      return console.log(err);
    }
    return console.log(salario);
  });
});
