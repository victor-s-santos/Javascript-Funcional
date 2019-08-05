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
    before(async () => {
        await database.cadastrarHeroi(ITEM_PADRAO)//evita de executar os próximos passos, sem item cadastrado
    })
    it('deve pesquisar um herói usando arquivos', async () => {
        const expected = ITEM_PADRAO
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
    it('deve cadastrar um herói, usando arquivos', async () => {
        const expected = ITEM_PADRAO
        const resultado = await database.cadastrarHeroi(ITEM_PADRAO)
        const [atual] = await database.listar(ITEM_PADRAO.id)
        deepEqual(atual, expected)
    })

})