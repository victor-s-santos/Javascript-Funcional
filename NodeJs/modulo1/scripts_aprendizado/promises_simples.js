//brincando com promises
const primiera_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Primeira promise resolvida com sucesso!');
    }, 1000);
});
//de acordo com o tutorial disponível no site desenvolvedor da mozilla:
// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);
const segunda_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Segunda promise resolvida com sucesso!');
    }, 1000);
});

//executando essa promise
// primiera_promise
//     .then((result) => {
//     //o result é o parâmetro do resolve
//         console.log(result);
//     })
//     .catch(function(error){
//         console.error('Primeira promise rejeitada!', error)
//     })

//executando segunda promise
// segunda_promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(function(error){
//         console.error('Segunda promise rejeitada!', error)
//     })

//no caso de necessitar execução de multiplas promises sendo que
//a saída de uma é dependência da outra
Promise.all([primiera_promise, segunda_promise])
    .then(([result1, result2]) => {
        console.log(`As promises foram resolvidas: 
        ${result1}, 
        ${result2}`)
    })
    .catch((error) => {
        console.log('Alguma promise deu erro!', error)//o error vai receber o valor de reject
    });