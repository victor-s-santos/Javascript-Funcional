const axios = require('axios');
const fs = require('fs');
axios.get('https://cotaboxvictor.herokuapp.com/api/Participation/?format=json')
.then(function(response){
    fs.writeFileSync('arquivo4.txt', `Primeiro nome: ${response.data[0].first_name} \n Último Nome: ${response.data[0].last_name} \n Participação: ${response.data[0].participation}`) 
  })
  .catch(function(error){
    console.error('Algo de errado não está certo!', error)
  })
 