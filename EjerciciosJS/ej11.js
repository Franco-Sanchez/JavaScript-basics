let tiempoTrabajo = Number(prompt("¿Cuántos años lleva trabajando con nosotros?"));

switch (tiempoTrabajo) {
    case 1:
        alert("Su bono es de $100");
        break;
    case 2:
        alert("Su bono es de $200");
        break;
    case 3:
        alert("Su bono es de $300");
        break;
    case 4:
        alert("Su bono es de $400");
        break;
    case 5:
        alert("Su bono es de $500");
        break;
    default:
        alert("Su bono es de $1000")
        break;
}