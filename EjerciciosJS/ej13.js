let totalAlumnos = Number(prompt("Ingrese la cantidad total de alumnos a evaluar"));
let aprobados = 0;
let desaprobados = 0;

for (let examen = 1; examen <= totalAlumnos; examen++) {
    let nota = Number(prompt(`Ingrese la nota del alumno número ${examen}`));
    if (nota >= 13 && nota <= 20) {
        aprobados = aprobados + 1;
    } else if (nota >= 0 && nota <= 12) {
        desaprobados = desaprobados + 1
    } 
}

alert(`Hay ${aprobados} alumno(s) aprobado(s) y ${desaprobados} desaprobado(s).`);