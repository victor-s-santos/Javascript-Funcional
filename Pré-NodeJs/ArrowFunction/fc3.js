//usando reduce

const numeros = [3, 4, 5];
const soma = (x, y) => x + y;
const SomaNumeros = numeros.reduce(soma);
console.log(SomaNumeros)
