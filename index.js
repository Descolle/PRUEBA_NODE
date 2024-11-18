const fs = require("fs");
const { registrar, leer } = require("./operaciones.js");

const args = process.argv.slice(2); //permite leer los elementos en la consola
const operacion = args[0];

if (operacion === "registrar") {
  const [nombre, edad, animal, color, enfermedad] = args.slice(1);
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log(
      "Por favor, proporciona todos los datos: nombre, edad, animal, color, enfermedad."
    );
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
