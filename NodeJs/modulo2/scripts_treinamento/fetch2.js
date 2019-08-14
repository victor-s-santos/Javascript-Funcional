const fetch = require('node-fetch');
fetch('https://cotaboxvictor.herokuapp.com/api/Participation/?format=json')
  .then((res) => { 
    return res.json() 
  })
  .then((Data) => {
    [resultado] = Data;
    // [...resultado] = Data;
    // var nome = [];
    // var participacao = [];
    // const w = Data.length - 1;
    // i = 0;
    // while(i<= w){
    //     nome.push(Data[i].first_name);
    //     participacao.push(Data[i].participation)
    //     i ++;
    
    console.log(resultado);  
  })
  .catch((err) => {
    console.error('Algum problema ocorreu:', err);
  });
  //como eu possuo agora um array que é o primeiro nome, e um outro que é a participação
  //vou implementar métodos de arrays