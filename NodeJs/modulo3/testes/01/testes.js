const assert = require("assert")
// assert.ok(true)
// assert.ok(false)//retorna assertion error
const { obterPessoas } = require('./service')
//a instalacao do pacote nock serve para simular requisicoes
const nock = require('nock')

describe('Star Wars Tests', function (){
    this.beforeAll(() => {
        const response = { 
            count: 1,
            next: null,
            previous: null,
            results:
             [ { name: 'Darth Vader',
                 height: '202',
                 mass: '136',
                 hair_color: 'none',
                 skin_color: 'white',
                 eye_color: 'yellow',
                 birth_year: '41.9BBY',
                 gender: 'male',
                 homeworld: 'https://swapi.co/api/planets/1/',
                 vehicles: [],
                 created: '2014-12-10T15:18:20.704000Z',
                 edited: '2014-12-20T21:17:50.313000Z',
                 url: 'https://swapi.co/api/people/4/' } ] }
        nock("https://swapi.co/api/people")
        .get('/?search=darth%20vader&format=json')
        .reply(200, response)

    })
    
    it('deve buscar o Darth Vader no formato correto', async() => {
        const expectativa = [{nome: 'Darth Vader', peso: "136", altura: "202"}]
        const nomebase = "darth vader"
        const resultado = await obterPessoas(nomebase)
        assert.deepEqual(resultado, expectativa)
    })
})