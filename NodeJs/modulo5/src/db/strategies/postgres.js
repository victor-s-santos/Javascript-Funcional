const ICrud = require('./interfaces/interfaceCrud')
class Postgres extends ICrud{
    constructor(){
        super()
    }
    create(item){
        console.log('Salvo no banco de dados Postgres')
    }
}

module.exports = Postgres