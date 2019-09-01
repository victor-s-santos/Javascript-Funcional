const ICrud = require('./interfaces/interfaceCrud')
class MongoDB extends ICrud{
    constructor(){
        super()
    }
    create(item){
        console.log('Salvo no banco de dados MongoDB')
    }
}

module.exports = MongoDB