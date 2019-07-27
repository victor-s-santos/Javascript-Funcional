//neste script eu viso entender o funcionamento de callback,
//funções síncronas e funções assíncronas
function Usuario_assincrono1(){
    //setTimeout para simular execução em background
    setTimeout(function (){
        return {
            id: 0,
            nome: 'Victor',
            data: new Date()
        }
    }, 1000)
}

function Usuario(){
    return{
        id: 1,
        nome: 'Santos',
        data: new Date()
    }
}
const victor = Usuario_assincrono1()
console.log(victor)
const santos = Usuario()
console.log(santos)
/*
Funções assíncronas(executadas em background) necessitam que seu
valor seja chamado por uma função, no caso representando um callback:
*/
function ResolverUsuario_assincrono1(erro, usuario){
//por padrão, primeiro parâmetro do callback é o erro, o segundo o sucesso
    console.log('usuario', usuario.nome)
}

const obter_victor = Usuario_assincrono1(ResolverUsuario_assincrono1)
/*
desta forma, quando a função Usuario_assincrono1 terminar sua execução,
a função ResolverUsuario_assincrono1 será chamada.
Mas necessita que o callback seja adicionado a função Usuario_assincrono1
Melhor representado abaixo:
*/

function Usuario_assincrono2(callback){
    setTimeout(function (){
        return callback(null, {
            id: 0,
            nome: 'Victor',
            data: new Date()
        })
    }, 1000)
}

function ResolverUsuario_assincrono2(erro, usuario){
    console.log('usuario', usuario.nome)
}

const obter_usuario2 = Usuario_assincrono2(ResolverUsuario_assincrono2)
obter_usuario2

//apesar da bagunça, acredito ter sido capaz de compreender a execução de callback