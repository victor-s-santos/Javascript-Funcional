//estudo do uso de for-forin com as listas
//necessário a instalação do pacote axios(npm install axios)
const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

obterPessoas('Chewbacca')
    .then(function(resultado){
        console.log('resultado', resultado)
    })
    .catch(function(error){
        console.error('Algo de errado não está certo!', error)
    })
//desta forma, é retornado todas as informações contidas na api, do personagem chewbacca