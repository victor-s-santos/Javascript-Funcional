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
    var nome = [];
            //var participacao = [];
            const w = Data.length - 1;
            let i = 0;
            while(i <= w){
                nome.push(`${Data[i].first_name}  ${Data[i].last_name} \n`);
                //participacao.push(`${Data[i].participation}`);
                i ++; 
            } 
            console.log(nome)
    fs.writeFileSync('arquivo2.txt',nome)
  })
  .catch((err) => {
    console.error(err);
  });
  //pegar todos os nomes, e associar as suas notas de participação e escrever em um arquivo externo
 