//escrever um arquivo
const fs = require('fs');

fs.writeFileSync('arquivo.txt', 'Primeiro teste: escrevendo arquivo!')

//escrever de uma api
const fetch = require('node-fetch');
fetch('https://cotaboxvictor.herokuapp.com/api/Participation/?format=json')
.then((res) => {  
    return res.json() 
  })
  .then((Data) => {
    console.log(`
    Primeiro nome: ${Data[0].first_name}
    Último nome: ${Data[0].last_name}
    Participação: ${Data[0].participation}`);
    fs.writeFileSync('arquivo2.txt', `Primeiro nome: ${Data[0].first_name}`)
  })
  .catch((err) => {
    console.error(err);
  }); 
 