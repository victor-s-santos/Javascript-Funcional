const fetch = require('node-fetch');
// fetch('https://workshopgenetica.herokuapp.com/api/ajax/?format=json')
//   .then((res) => { 
//      
//     return res.json() 
//   })
//   .then((Data) => {
//     console.log(Data);
//     
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//api melhorzinha https://cotaboxvictor.herokuapp.com/api/Participation/?format=json 
// fetch('https://cotaboxvictor.herokuapp.com/api/Participation/?format=json')
//   .then((res) => {  
//     return res.json() 
//   })
//   .then((Data) => {
//     console.log(Data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

  fetch('https://cotaboxvictor.herokuapp.com/api/Participation/?format=json')
  .then((res) => {  
    return res.json() 
  })
  .then((Data) => {
    console.log(`
    Primeiro nome: ${Data[0].first_name}
    Último nome: ${Data[0].last_name}
    Participação: ${Data[0].participation}`);
  })
  .catch((err) => {
    console.error(err);
  }); 
  //ler a documentação¹, fetch já retorna uma promise
  //[1]https://www.npmjs.com/package/node-fetch 