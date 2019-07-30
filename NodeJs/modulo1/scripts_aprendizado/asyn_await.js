//resolver as promises com async await

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
//o fato de adicionar a palavra async faz com que o retorno seja uma promise

async function main(){
    try{
        const usuario = await Usuario_assincrono2()
        const telefone = await obterTelefone(usuario.id)
        console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd})${telefone.telefone}`)
    }
    catch(error){
        console.error('Algo de errado não está certo!', error)

    }
}
main()

//uma maneira mais simples que a anterior de resolver promises