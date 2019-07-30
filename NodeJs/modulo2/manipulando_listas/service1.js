//transformando esta função em um módulo
const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}
//assim eu transformo minha função em um módulo
module.exports = {
    obterPessoas
}