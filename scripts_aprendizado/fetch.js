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
fetch('https://cotaboxvictor.herokuapp.com/api/Participation/?format=json')
  .then((res) => {  
    return res.json() 
  })
  .then((Data) => {
    console.log(Data);
  })
  .catch((err) => {
    console.error(err);
  });

  //ler a documentação, e aplicar os conceitos visto de callback e promises
   