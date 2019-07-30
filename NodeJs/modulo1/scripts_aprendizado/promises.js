//substituir os callbacks pelas promises
function Usuario_assincrono2(){
    return new Promise(function ResolvePromise(resolve, reject){
        setTimeout(function (){
            return resolve({
                id: 0,
                nome: 'Victor',
                data: new Date()
            })
        }, 1000)

    })

}
function obterTelefone(id){
    return new Promise(function ResolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '33164035',
                ddd:'13'
            })
        }, 2000);
    })
}

const usuario_promise = Usuario_assincrono2()
usuario_promise
    .then(function (usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return{
                    id: usuario.id,
                    usuario: usuario.nome,
                    telefone: result.telefone
                }
            })
    })
    .then(function(resultado){
        console.log('resultado',resultado)

    })
    .catch(function(erro){
        console.error('ALGO DE ERRADO NAO ESTÁ CERTO!', erro)
    });

