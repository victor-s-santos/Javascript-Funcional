function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Carlos',
            dataNascimento: new Date()    
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '33164035',
            ddd: 13
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Miguel Seiad Bichir',
            numero: 1270

        })
    }, 2000)
}
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}
obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error('Algum problema em usuário!', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('Algum problema em telefone!', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2){
                console.error('Algum problema com o endereço!', error)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
