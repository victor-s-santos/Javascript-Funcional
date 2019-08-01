//explorando o método reduce
const { obterPessoas } = require('./service1')
async function main(){
    try {
        const { results } = await obterPessoas('')
        const alturas = results.map(item => parseInt(item.height))
        console.log('alturas:', alturas)
        const total = alturas.reduce((anterior, proximo) => {
            return anterior + proximo
        })
        console.log('O valor da soma das alturas é:', total)
    } catch (error) {
        console.error('Algo de errado não está certo!', error)
    }
}
main()