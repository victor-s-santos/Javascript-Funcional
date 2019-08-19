const {
    readFile,
    writeFile
} = require('fs')
const { 
    promisify
} = require('util')

//convertendo para promises
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
//outra forma de obter dados de um json
// const dadosJson = require('./herois.json)

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterHeroi(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    async escreverHeroi(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true

    }
    async cadastrarHeroi(heroi){
        const dados = await this.obterHeroi()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroicomId = {
            id,
            ...heroi
        }
        const dadosFinal = [
            ...dados,
            heroicomId
        ]
        const resultado = await this.escreverHeroi(dadosFinal)
        return resultado

    }
    async listar(id){
        const dados = await this.obterHeroi()
        const heroisFiltrados = dados.filter(item =>(id ? (item.id === id): true))
        return heroisFiltrados
    }
    async remover(id){
        if(!id){
            return await this.escreverHeroi([])
        }
        const dados = await this.obterHeroi()
        //console.log('id', id)
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('Usuário inexistente!')
        }
        dados.splice(indice, 1)
        return await this.escreverHeroi(dados)
    }

    async atualizar(id, modificacoes){
        const dados = await this.obterHeroi()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('Herói informado não encontrado')
        }
        const atual = dados[indice]
        const objetoAtualizar = {
            ...atual,
            ...modificacoes
        }
        dados.splice(indice, 1)
        return await this.escreverHeroi([
            ...dados,
            objetoAtualizar
        ])

        // return false
    }
}

module.exports = new Database()