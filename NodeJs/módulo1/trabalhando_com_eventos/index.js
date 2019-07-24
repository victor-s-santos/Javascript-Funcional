//trabalhando com eventos

// const EventEmitter = require('events')
// class MeuEmissor extends EventEmitter{

// }
// const meuEmissor = new MeuEmissor()
// const nomeEvento = 'usuario:click'
// meuEmissor.on(nomeEvento, function(click){
//     console.log('um usuário clicou', click)
// }) 

// meuEmissor.emit(nomeEvento, 'em qualquer lugar da tela')
// meuEmissor.emit(nomeEvento, 'no exit')

// let count = 0;
// setInterval(function(){
//     meuEmissor.emit(nomeEvento, 'no exit' + (count ++))
// }, 1000)

// const stdin = process.openStdin()
// stdin.addListener('data', function (value){
//     console.log(`Você digitou: ${value.toString().trim()}`)
// })
const stdin = process.openStdin()
function main(){
    return new Promise(function(resolve, reject){
        stdin.addListener('data', function(value){
            //console.log(`Você digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function(resultado){
    console.log('resultado', resultado.toString())
})
//usando promises executa-se apenas uma vez