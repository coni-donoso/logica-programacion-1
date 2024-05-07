let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));


if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los números ingresados son iguales: ");
} else {
   
    let numerosDescendentes = [numero1, numero2, numero3].sort((a, b) => b - a);
    console.log("Números ordenados de mayor a menor: " + numerosDescendentes.join(", "));

    
    let numerosAscendentes = [numero1, numero2, numero3].sort((a, b) => a - b);
    console.log("Números ordenados de menor a mayor: " + numerosAscendentes.join(", "));

    let numeroMayor = numerosDescendentes[0];
    let numeroCentro = numerosDescendentes[1];
    let numeroMenor = numerosDescendentes[2];
    console.log("Número mayor: " + numeroMayor);
    console.log("Número del centro: " + numeroCentro);
    console.log("Número menor: " + numeroMenor);
}
