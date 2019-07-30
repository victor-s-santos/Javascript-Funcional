//aplicar o paradigma funcional neste exemplo

function checa_par(n){
    if(n % 2 === 0){
        console.log('é par')
        return(n)
    }else{
        console.log('é ímpar')
        return(n)
    }
}
function soma(n){
    console.log(n + 1)
}


checa_par(2)
soma(checa_par(2))

//melhorar isso aqui