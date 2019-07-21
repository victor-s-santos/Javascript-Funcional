//me distraindo com arrowfunction
//sem arrowfunction
var par = function(numero){
    if(numero % 2 === 0){
        console.log(`${numero} é par!`)
    }else{
        console.log(`${numero} é impar!`)
    }
} 

//com arrowfunction
var par_arrowfunction = (numero) =>  (numero % 2 === 0) ? 
    console.log(`${numero} é par!`) : 
        console.log(`${numero} é impar!`)
//quebra de linha apenas para tornar legível


par(6);
par(5);
par_arrowfunction(6);
par_arrowfunction(5);
