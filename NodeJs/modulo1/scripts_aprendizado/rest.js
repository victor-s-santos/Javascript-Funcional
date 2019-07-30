var request = require('request');
request('https://samples.openweathermap.org/data/2.5/weather?q=London, uk&appid=b6907d289e10d714a6e88b30761fae22', function (error, response, body) {
  var parsedWeather = JSON.parse(body);
  console.log('A temperatura atual em Bertioga é ' + parsedWeather['main']['temp']);
});
//implementar esse esquema de uso da api com as requisições das aulas de Node
//aprender a usar esta api, já que pra qualquer cidade a temperatura dada é a mesma