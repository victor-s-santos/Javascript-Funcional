//agora vou importar o módulo service1, presente em mesmo diretório
const servico = require('./service1')

async function main(){
    try{
        const result = await servico.obterPessoas('')//incluir todos os nomes
        const names = []

        console.time('medetempo-for')
        //usando for
        for(let i=0; i<=result.results.length -1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('medetempo-for')
        console.time('medetempo-forin')
        //usando forin(igual python)
        for(let i in result.results){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('medetempo-forin')
        
        //usando forof
        console.time('medetempo-forof')
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('medetempo-forof')
        console.log('nomes', names)

    }
    catch(error){
        console.error('Algo de errado não está certo!', error)
    }
}
//como o laço executa 3 vezes, a lista names tem o triplo de conteúdo
main()