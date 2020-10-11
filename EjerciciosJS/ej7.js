let telaMetros = Number(prompt("¿Cuántos metros de tela tiene?"));
const valorPulgada = 0.0254;
let telaPulgadas = telaMetros / valorPulgada;

alert(`Usted tiene que solicitar ${telaPulgadas.toFixed(1)} pulgadas.`);