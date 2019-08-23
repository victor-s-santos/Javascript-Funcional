//brincando com axios, com o meu primeiro github^^
const axios = require('axios');
const fs = require('fs');
axios.get('https://api.github.com/users/' + 'criolodoido')
  .then(function(response){
    fs.writeFileSync('arquivo3.txt', `Nome de usuário: ${response.data.login} \n id: ${response.data.id} \n Nome: ${response.data.name} \n Biografia: ${response.data.bio}`) 
  })
  .catch(function(error){
    console.error('Algo de errado não está certo!', error)
  })
 