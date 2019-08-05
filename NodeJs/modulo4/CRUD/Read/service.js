const {
    readFile
} = require('fs')
const { 
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
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
    escreverHeroi(){

    }
    async listar(id){
        const dados = await this.obterHeroi()
        const heroisFiltrados = dados.filter(item =>(id ? (item.id === id): true))//15:00
        return heroisFiltrados
    }
}

module.exports = new Database()