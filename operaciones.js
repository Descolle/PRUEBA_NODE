const fs = require("fs");
const archivo = "citas.json";

//convierte el archvio json
function registrar(nombre, edad, animal, color, enfermedad) {
  try {
    let citas = [];
    if (fs.existsSync(archivo)) {
      const contenido = fs.readFileSync(archivo, "utf8");
      citas = JSON.parse(contenido);
    }
    //crea la nueva cita
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita); // Agregar la nueva cita al arreglo por medio del push

    // Guardar el arreglo actualizado en el archivo
    fs.writeFileSync(archivo, JSON.stringify(citas, null, 2), "utf8"); //al no haber json vacio, lo crea con la cita nueva
    console.log("Cita registrada exitosamente:", nuevaCita);
  } catch (error) {
    console.error("Error al registrar la cita:", error);
  }
}

function leer() {
  try {
    const citas_lectura = fs.readFileSync(archivo, "utf8");
    const datos = JSON.parse(citas_lectura);

    console.log("Citas actuales:");
    console.table(datos);
  } catch (error) {
    console.error("Error al leer las citas:", error);
  }
}

module.exports = { registrar, leer };
