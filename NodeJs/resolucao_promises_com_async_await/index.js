/*
Resolvendo as promises com async await
*/
//importando um módulo do próprio node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario(){
    //ocorrendo erro -> reject(err0)
    //ocorrendo sucesso -> resolve
    return new Promise(function ResolvePromise(resolve, reject){
        setTimeout(function () {
            //return reject(new Error(`DEU RUIM NA PORRA TODA!`) )
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
//1º passo: add a palavra async -> automaticamente retorna uma promisse
main()//executar a função antes dela ser declarada, detalhe importante, pra quem vem do python
async function main(){
    try{
        console.time(`medida do tempo`)
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
       const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
       ])
       //resolver as primomises melhor garante um menor tempo de execução
       const telefone = resultado[0]
       const endereco = resultado[1]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereço: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd(`medida do tempo`)

    }
    catch(error){
        console.error('Erro executado!', error)
    }
}
/*
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
*/