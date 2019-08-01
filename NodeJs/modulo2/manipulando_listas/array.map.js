const servico = require('./service1')
//criando meu próprio método map
Array.prototype.meuMap = function(callback){
 const meuArrayMapeado = []
 //
 for(let index = 0; index <= this.length-1; index++){
    const resultado = callback(this[index], index)
    meuArrayMapeado.push(resultado)
  }
    return meuArrayMapeado;
}

async function main(){
    try{
        const resultados = await servico.obterPessoas('')
        // const names = resultados.results.map((pessoa) => pessoa.name)
        // console.log('nomes', names)
        const names = resultados.results.meuMap(function(personagem, index){
            return `[${index}]${personagem.name}`
        })
        console.log('Nomes', names)
    }
    catch(erro){
        console.error('Algo de errado não está certo!', erro)

    }
}
main()
