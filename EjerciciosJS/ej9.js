let fechaNacimiento = Number(prompt("¿En qué año nació?"));
const temporadaActual = new Date().getFullYear();
let edad = temporadaActual - fechaNacimiento;

alert(`La persona tiene ${edad} años.`);