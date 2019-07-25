/*
Utilizando as promisses, vou refatorar o código
*/
//importando um módulo do próprio node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario(){
    //ocorrendo erro -> reject(err0)
    //ocorrendo sucesso -> resolve
    return new Promise(function ResolvePromise(resolve, reject){
        setTimeout(function () {
            //return reject(new Error(`DEU RUIM NA GALERA TODA!`) )
            return resolve({
                id: 1,
                nome: 'Carlos',
                dataNascimento: new Date()    
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '33164035',
                ddd: 13
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Miguel Seiad Bichir',
            numero: 1270

        })
    }, 2000)
}
const usuarioPromise = obterUsuario()
// usa-se .then para manipular o sucesso
// usa-se .catch para manioular erros
usuarioPromise
    .then( function(usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return{
                    usuario:{
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}
        `)
    })
    .catch(function(error){
        console.error('Algum problema retornado!', error)
    })
