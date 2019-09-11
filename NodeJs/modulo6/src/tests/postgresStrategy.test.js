const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())

describe('Postgres Strategy', function(){
    this.timeout(Infinity)
    it('PostgresSql Connection', async function(){
        const result = await context.isConected()
        assert.equal(result, true)
    })
})
//entender o que há de errado neste teste