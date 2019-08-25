const axios = require('axios');
axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
.then(function(response){
    console.log(`Informações metereológicas referentes a ${response.data.name}`)
    console.log(`Localizada na ${response.data.sys.country}`)
    console.log(`Velocidade do vento: ${response.data.wind.speed}`)
    console.log(`Temperatura máxima: ${response.data.main.temp_max}`)
})

//Entender como manipular estes valores, removendo-os deste bloco, de forma que eu possa
//chamá-los em qualquer lugar da minha aplicação