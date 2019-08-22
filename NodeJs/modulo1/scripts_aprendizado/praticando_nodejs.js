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
    var nome_participacao = [];
            //var participacao = [];
            const w = Data.length - 1;
            let i = 0;
            while(i <= w){
                nome_participacao.push(`${Data[i].first_name} ${Data[i].last_name} \n Participação: ${Data[i].participation} \n`);
                //participacao.push(`${Data[i].participation}`);
                i ++; 
            } 
            console.log(nome_participacao)
    fs.writeFileSync('arquivo2.txt',nome_participacao)
  })
  .catch((err) => {
    console.error(err);
  });
  //pegar todos os nomes, e associar as suas notas de participação e escrever em um arquivo externo
 