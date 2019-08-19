const Commander = require('commander')
const Database = require('./service')
const Heroi = require('./heroi')
async function main(){
    Commander
        .version('v1')
        .option('-n, --nome [value]', "nome do herói")
        .option('-p, --poder [value]', "poder do herói")
        .option('-i, --id [value]', 'Id do herói')
        
        .option('-c, --cadastrar', "cadastrar um herói")
        .option('-l, --listar', 'listar um herói')
        .option('-r, --remover [value]', 'remover um herói pelo id')
        .option('-a, --atualizar [value]', "Atualizar um herói pelo id")
        .parse(process.argv)
    const heroi = new Heroi(Commander)   
    try{
        if(Commander.cadastrar){
            delete heroi.id
            const resultado = await Database.cadastrarHeroi(heroi)
            if(!resultado){
                console.error('Herói não foi cadastrado!')
                return;
            }
            console.log('Herói cadastrado com sucesso!')
            console.log(heroi)
            //console.log(Commander) isto trás muita informação inútil
            
        }
        if(Commander.listar){
            delete heroi.id
            const resultado = await Database.listar()
            console.log(resultado)
            return;
        }
        if(Commander.remover){
            const resultado = await Database.remover(heroi.id)
            if(!resultado){
                console.error('Não foi possível remover este herói')
                return;
            }
            console.log('Herói removido sem grandes problemas.')
        }
        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar);
            //delete heroi.id;
            //removendo todas as chaves undefined | null
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado){
                console.error('Não foi possível atualizar este herói!')
                return;
            }
            console.log('Herói atualizado com sucesso!')
        }
            
    } catch(error){
        console.log('Algo de errado não está certo!', error)
    }
}
main()