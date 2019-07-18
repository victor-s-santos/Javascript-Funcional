
const composto = (f, g) => x => f(g(x));

const letraMaiuscula = x => x.toUpperCase();
const exclama = x => x + '!';

const nervoso = composto(letraMaiuscula, exclama);

console.log(nervoso('ahhh muleke'));