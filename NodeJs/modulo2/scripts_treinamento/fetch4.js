const fetch = require('node-fetch');
function fetchPerson(id){
    fetch(`http://localhost:8000/api/usuarios/${id}`)
    .then((res) => { 
        return res.json() 
      })
    .then((Data) => {
        resultado = Data;
        console.log(`Mensagem: ${resultado.message}
                    id: ${resultado.data.id},
                    Nome:${resultado.data.name},
                    email:${resultado.data.email},
                    password:${resultado.data.password}`);  
  })
  .catch((err) => {
    console.error('Algum problema ocorreu:', err);
  });
}

fetchPerson(13);