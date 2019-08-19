const Commander = require('commander')
const Database = require('./service')
const Heroi = require('./heroi')
async function main(){
    Commander
        .version('v1')
        .option('-n, --nome [value]', "nome do heroi")
        .option('-p, --poder [value]', "poder do heroi")
        .option('-c, --cadastrar', "cadastrar um heroi")
        .parse(process.argv)
    const heroi = new Heroi(Commander)   
    try{
        if(Commander.cadastrar){
            const resultado = await Database.cadastrarHeroi(Commander)
            if(!resultado){
                console.error('Herói não foi cadastrado!')
                return;
            }
            console.log('Herói cadastrado com sucesso!')
            console.log(heroi)
            //console.log(Commander) isto trás muita informação inútil
            
        }
            
    } catch(error){
        console.log('Algo de errado não está certo!', error)
    }
}

main()