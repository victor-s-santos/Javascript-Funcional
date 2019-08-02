const axios = require('axios')

const URL = `https://swapi.co/api/people`

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    console.log(response.data)
    return response.data.results.map(mapearPessoas)
}

function mapearPessoas(item){
    return{
        nome: item.name,
        altura: item.height,
        peso: item.mass
        
    }
}

module.exports = {
    obterPessoas
}

//primeiro momento
// const axios = require('axios')

// const URL = `https://swapi.co/api/people`

// async function obterPessoas(nome){
//     const url = `${URL}/?search=${nome}&format=json`
//     const response = await axios.get(url)
//     return response.data
// }

// module.exports = {
//     obterPessoas
// }