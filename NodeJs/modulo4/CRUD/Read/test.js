const {
    deepEqual,
    ok
} = require('assert')

const database = require('./service')
const ITEM_PADRAO = {
    nome: 'Lanterna Verde',
    poder: 'Luz Verde',
    id: 1
}

describe('Suite de manipulação de Heróis!', ()=>{
    it('deve pesquisar um herói usando arquivos', async () => {
        const expected = ITEM_PADRAO
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })

})