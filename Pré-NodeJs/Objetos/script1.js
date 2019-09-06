const pessoa ={
    nome: 'Carlos',
    idade: 53,
    sexo: 'Masculino',
    vivo: true,
    //eu não posso fazer essa leitura usando arrow function
    // boasvindas: () => {
    //     console.log(
    //         `Olá, eu sou o Senhor ${this.nome}
    //         , eu possuo ${this.idade} anos. 
    //         Sou do sexo ${this.sexo}, 
    //         e se estou vivo? ${this.vivo}`)
    // }
    
    //assim eu possuo um método do objeto pessoa, portanto funciona
    // boasvindas: function(){
    //     console.log(
    //         `Olá, eu sou o Senhor ${this.nome}
    //         , eu possuo ${this.idade} anos. 
    //         Sou do sexo ${this.sexo}, 
    //         e se estou vivo? ${this.vivo}`)
    // }

    //assim também possuo um método, portanto funciona
    boasvindas(){
        console.log(
            `Olá, eu sou o Senhor ${this.nome}
            , eu possuo ${this.idade} anos. 
            Sou do sexo ${this.sexo}, 
            e se estou vivo? ${this.vivo}`)
    }
};
pessoa.boasvindas();