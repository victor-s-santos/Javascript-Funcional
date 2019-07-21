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

//sem arrowfunction
function testa_primo(numero)
{

  if (numero===1)
  {
    return console.log(`${numero} por definição não é primo!`);
  }
  else if(numero === 2)
  {
    return console.log(`${numero} é o único primo par!`);
  }else
  {
    for(var x = 2; x < numero; x++)
    {
      if(numero % x === 0)
      {
        return console.log(`${numero} não é primo!`);
      }
    }
    return console.log(`${numero} é primo`);  
  }
}

testa_primo(91);//não é primo
testa_primo(90);//não é primo
testa_primo(83);//é primo
testa_primo(97);//é primo