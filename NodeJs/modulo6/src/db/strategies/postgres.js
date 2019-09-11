const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')
class Postgres extends ICrud{
    constructor(){
        super()
        this.driver = null
        this._herois = null
        this._connect()
    }
    async isConnected(){
        try{
            await this._driver.authenticate()
            return true
        }
        catch(error){
            console.log('Conexão falhou!', error)
            return false;
        }
    }
    create(item){
        console.log('Salvo no banco de dados Postgres')
    }
    _connect(){
        this._driver = new Sequelize(
            'herois',
            'vsantos93',
            'swordfish',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        
        )
    }
   async defineModel(){
        this._herois = driver.define('herois', {
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
    }
}

module.exports = Postgres