//Ampliando o callback
function Usuario_assincrono2(callback){
    setTimeout(function (){
        return callback(null, {
            id: 0,
            nome: 'Victor',
            data: new Date()
        })
    }, 1000)
}

function obterTelefone(id, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '33164035',
            ddd:'13'
        })
    }, 2000);
}

function ResolverUsuario_assincrono2(erro, usuario){
    console.log(`
    Nome:${usuario.nome},
    Data:${usuario.data}`)
}

Usuario_assincrono2(function ResolverUsuario_assincrono2(erro, usuario){
    if(erro){
        console.error('ALGO DE ERRADO NÃO ESTÁ CERTO!', erro)
        return;
    }
    obterTelefone(usuario.id, function ResolverTelefone(erro1, telefone){
        if(erro){
            console.error('ALGO DE ERRADO NÃO ESTÁ CERTO!', erro1)
            return;
        }
        console.log(`
        Nome: ${usuario.nome},${usuario.data}
        Telefone ${telefone.telefone}`)

    })
})
/*assim ficou claro a relação de funções de ordem superior sobre as demais,
e também de funções callback(funções que trazem outra função como seu argumento) 
Desta forma sincronizou-se o retorno das funções
*/