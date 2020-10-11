let salarioInicial = 1500;
let nuevoSalario = 0;

for (let temporada = 1; temporada <= 6; temporada++) {
    
    if (temporada === 1) {
        nuevoSalario = salarioInicial + (10/100 * salarioInicial);
        console.log(`El salario en el año número ${temporada} fue de: S/${nuevoSalario}`);
    } else {
        nuevoSalario = nuevoSalario + (10/100 * nuevoSalario);
        console.log(`El salario en el año número ${temporada} fue de: S/${Math.round(nuevoSalario)}`);
    }
    
}

console.log(`El salario del profesor al cabo de 6 años fue de: S/${Math.round(nuevoSalario)}`);