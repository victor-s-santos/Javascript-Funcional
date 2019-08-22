//brincando com axios, com o meu primeiro github^^
const axios = require('axios');
axios.get('https://api.github.com/users/' + 'criolodoido')
  .then(function(response){
    console.log(response.data); 
    console.log(response.status); 
  }); 