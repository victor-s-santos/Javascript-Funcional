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

//similar ao range do python
const numbers = Array.from({length: 50}, (x,i) => i);
numbers