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
const ATUALIZADO_PADRAO = {
    nome: 'Goku',
    poder: 'Supera o poder de qualquer adversário',
    id: 2
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
    it('deve remover um herói por id', async () => {
        const expected = true;
        const resultado = await database.remover(ITEM_PADRAO.id)
        deepEqual(resultado, expected)
    })
    it('deve atualizar o heroi pelo id', async () => {
        const expected = {
            ...ATUALIZADO_PADRAO,
            nome: 'Gohan',
            poder: 'Híbrido'
        }
        const resultado = await database.atualizar(ATUALIZADO_PADRAO.id, expected)
    })
})