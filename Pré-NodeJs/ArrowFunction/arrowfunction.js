//exemplo de uma função sem o uso de arrow function

const sp = ['Osasco', 'Bertioga', 'Botucatu', 'São Paulo'];
const linda1 = sp.map(function(name1){
    return `A cidade de ${name1} é linda!`;
});
console.log(linda1);

//agora usando arrow function

const linda2 = sp.map((name2 => {
    return `A cidade de ${name2} é linda!`;
}));
console.log(linda2)

