const { obterPessoas } = require('./service1')
//criando meu próprio método filter
Array.prototype.meufilter = function(callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        //o resultado do callback vai ser true ou false
        //caso o result receba false, continua o fluxo
        if(!result) continue;
        lista.push(item)//se não for false, adicionar a lista
    }
    return lista;
}

async function main(){
    try {
     const{
         results
     } = await obterPessoas('')
     const familiaLars = results.meufilter((item, index, lista) => {
        console.log(`Índice: ${index}`, `Tamanho da lista: ${lista.length}`) 
        return item.name.toLowerCase().indexOf('lars') !== -1
     })
     const names = familiaLars.map((pessoa) => pessoa.name)
     console.log(`Os personagens que fazem parte da família Lars são: [${names}]`)
    } catch (error) {
        console.error('Algo de errado não está certo!', error)
    }
}
main()