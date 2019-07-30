//explorando o uso do map
const servico = require('./service1')
async function main1(){
    try{
        const resultados = await servico.obterPessoas('')
        const names = []
        //desta forma ainda preciso de um laço auxiliar
        resultados.results.forEach(function(item){
            names1.push(item.name)
        })
        console.log('nomes', names)
    }
    catch(erro){
        console.error('Algo de errado não está certo!', erro)

    }
}
//main1()
//utilizando map
async function main2(){
    try{
        const resultados = await servico.obterPessoas('')
        //const names = []
        //sem lista
        // const names = resultados.results.map(function (personagem){
        //     return personagem.name

        
        //mais simples com arrow function
        const names = resultados.results.map((pessoa) => pessoa.name)
        console.log('nomes', names)
    }
    catch(erro){
        console.error('Algo de errado não está certo!', erro)

    }
}
//o retorno já é propriamente uma lista
main2()