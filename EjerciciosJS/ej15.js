let temporadaElecciones = Number(prompt("En qué año son las próximas elecciones?"));
let fechaNacimiento = Number(prompt("Indique el año en que nació"));
let edad = temporadaElecciones - fechaNacimiento;

if (edad >= 18) {
    alert("Usted puede votar");
} else if (edad >= 0 && edad <= 17) {
    alert("Usted no puede votar");
} else {
    alert("Ingrese datos válidos");
}