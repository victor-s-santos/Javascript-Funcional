//exemplos de arrowfunction com map
const sp = ['Osasco', 'Bertioga', 'Botucatu', 'São Paulo'];
const foda = sp.map(function(name){
    return `A cidade de ${name} é foda!`;
});
console.log(foda);

//usando arrowfunction
const arrowfoda = sp.map((name) => {
    return `A cidade de ${name} é foda!`;
});
console.log(arrowfoda);


const arrowsingleline = sp.map(name => `A cidade de ${name} é foda!`);
console.log(arrowsingleline);

//utilização do filter
const amoLitoral = sp
            .filter(name => name == 'Bertioga')
            .map(name => `Amo o litoral de ${name}!`);
console.log(amoLitoral)