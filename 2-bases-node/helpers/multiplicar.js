const fs = require("fs");

const crearArchivo = async (base = 5, list = false) => {
  try{
      
    let salida = "";
  
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (list){
      console.log("=================");
      console.log(`   Tabla del ${base}    `);
      console.log("=================");
    console.log(salida)

    }


  
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;
    //   console.log("tabla-5.txt creado");
    // });
  
    await fs.writeFileSync(`tabla-${base}.txt`, salida); //Mejor versión
  
    return `tabla-${base}.txt`;
  } catch(err){
    throw err;
  }
  

};

module.exports = {
  crearArchivo,
};
