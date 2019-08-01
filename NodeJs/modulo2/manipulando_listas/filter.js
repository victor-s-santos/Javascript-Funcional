const { obterPessoas } = require('./service1')
//explorando o método filter
async function main(){
    try {
     const{
         results
     } = await obterPessoas('')
     const familiaLars = results.filter(function(item){
         // retorna boleano: false = não passa, true = passa
         const result = item.name.toLowerCase().indexOf('lars') !== -1
         return result
     })
     const names = familiaLars.map((pessoa) => pessoa.name)
     console.log(names)
    } catch (error) {
        console.error('Algo de errado não está certo!', error)
        
    }
}
main()