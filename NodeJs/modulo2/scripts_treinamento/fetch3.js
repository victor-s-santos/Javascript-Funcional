const fetch = require('node-fetch');
function fetchPerson(id){
    fetch(`http://swapi.co/api/people/${id}`)
        .then( function(response){
        return response.json()
        })
        .then(function(json){
        console.log("data", json)

        if (!json.name){
            return;
        }
        const name = json.name;
        const birth_year = json.birth_year;
        })
}

for (let i = 1; i <= 100; i++) {
    fetchPerson(i)
  }
//brincar um pouco a partir daqui.
https://gist.github.com/jwo/0de44f4709026aef3e3a36ff9ed28f57