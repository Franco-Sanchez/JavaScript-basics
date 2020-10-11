let cantidadSoles = Number(prompt("¿Cuántos soles tiene?"));
const valorDolar = 3.58;
let cantidadDolares = cantidadSoles / valorDolar;

alert(`El monto ingresado equivale a $${Math.round(cantidadDolares)}`);