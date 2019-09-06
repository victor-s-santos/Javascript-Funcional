//Arrays
const pessoa ={
    nome: 'Carlos',
    idade: 53,
    sexo: 'Masculino',
    vivo: true,
    boasvindas(){
        console.log(
            `Olá, eu sou o Senhor ${this.nome}
            , eu possuo ${this.idade} anos. 
            Sou do sexo ${this.sexo}, 
            e se estou vivo? ${this.vivo}`)
    }
};

const lista = ['Futebol', 'Capoeira', 'Surf', pessoa]
//armazenando um objeto(pessoa), dentro de um array, e chamando um método(boasvindas)
lista[3].boasvindas()

const esportes = ['Capoeira', 'Futebol', 'Programar', 'Correr', 'Lutar']
//map sempre recebe uma função onde onde é definido como adicionar 
//ou editar os elementos dentro deste array
// console.log(esportes.map(esporte => {
//     return `Esporte ${esporte}`;
// }));

//em uma linha
console.log(esportes.map(esporte => `Esporte: ${esporte}`));
//mas sem mudar o array. Logom o uso do map retorna um novo array
console.log(esportes)


const numeros = [-1, 2, -3, 4, -5, 6];
const soma = (acumulado, valoratual) => acumulado + valoratual;
console.log(`Usando o método reduce ${numeros.reduce(soma)}`);
//o reduce aplica a fc soma sobre todos os elementos da lista, onde acumulado é 
//numeros[i] e valoratual é numeros[i+1]
//-1+2-3+4-5+6 = 3