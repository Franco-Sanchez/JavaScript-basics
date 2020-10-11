let nombre1 = prompt("¿Cómo se llama la primera persona?");
let edad1 = Number(prompt("¿Cuántos años tiene la primera persona?"));
let nombre2 = prompt("¿Cómo se llama la segunda persona?");
let edad2 = Number(prompt("¿Cuántos años tiene la segunda persona?"));
let nombre3 = prompt("¿Cómo se llama la tercera persona?");
let edad3 = Number(prompt("¿Cuántos años tiene la segunda persona?"));

if (edad1 < edad2 && edad1 < edad3) {
    alert(`La persona con menor edad es ${nombre1} con ${edad1} años.`);
} else if (edad2 < edad1 && edad2 < edad3) {
    alert(`La persona con menor edad es ${nombre2} con ${edad2} años.`);
} else if (edad3 < edad1 && edad3 < edad2) {
    alert(`La persona con menor edad es ${nombre3} con ${edad3} años.`);
} else {
    alert("Ingrese datos válidos.");
}