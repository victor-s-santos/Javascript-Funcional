//criando meu próprio método reduce
const { obterPessoas } = require('./service1')
Array.prototype.meureduce = function(callback, valorinicial){
    //pegar o valor inicial caso ela seja diferente de undefined, do contrário pegar o this[0]
    let valorfinal = typeof valorinicial !== undefined ? valorinicial : this[0]
    for(let index = 0; index <= this.length - 1; index ++){
        valorfinal = callback(valorfinal, this[index], this)
    }
    return valorfinal
}

async function main(){
    try {
        const { results } = await obterPessoas('')
        const alturas = results.map(item => parseInt(item.height))
        console.log('alturas:', alturas)
        // const total = alturas.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // })
        const lista = [
            ["Victor", "Suelen"],
            ["Noob", "Mel"]
        ]
        const total = lista.meureduce((anterior, proximo) => {
            return anterior.concat(proximo)
        },[])
        .join('->')
        console.log('Relação dono e cachorro:', total)
    } catch (error) {
        console.error('Algo de errado não está certo!', error)
    }
}
main()