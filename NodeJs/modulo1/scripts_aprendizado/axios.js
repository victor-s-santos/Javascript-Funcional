//brincando com axios, com o meu primeiro github^^
const axios = require('axios');
const fs = require('fs');
let id = '';
axios.get('https://api.github.com/users/' + 'criolodoido')
  .then(function(response){
    if(response.status === 200){
      fs.writeFileSync('arquivo3.txt', `Nome de usuário: ${response.data.login} \n id: ${response.data.id} \n Nome: ${response.data.name} \n Biografia: ${response.data.bio}`)
    }else{
      console.error(`Algo de errado não está certo! ${error}`)
    } 
  }); 
  //http://codeheaven.io/how-to-use-axios-as-your-http-client-pt/

  //https://flaviocopes.com/node-axios/