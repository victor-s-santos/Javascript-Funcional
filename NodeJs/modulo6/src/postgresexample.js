//npm install sequelize pg-hstore pg

const Sequelize = require('sequelize')
async function main(){
    const Herois = driver.define('herois', {
        id:{
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        poder: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    })
    await Herois.sync()
    // await Herois.create({
    //     nome: 'Android 17',
    //     poder: 'Sobrevivente no torneio do poder.'
    // })
    const resultado = await Herois.findAll({
        raw: true,//o raw faz com que seja retornado somente informações dos dados
        attributes: ['poder', 'nome']//assim eu consigo retornar somente poder e nome
        
    })
    console.log('Resultado: ', resultado)
}
  
main()