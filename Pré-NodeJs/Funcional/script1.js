const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Feito!');
        }, 2000);
    });
    return promise;
};
//uso de promises é importante para deixar o código mais manuseável

setTimeout(() => {
    console.log('Cronômetro rodado!');
    fetchData()
        .then(msg => {
            console.log(msg);
            return fetchData()
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2500)

//usando callbacks
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Feito!');
//     }, 2000);
// };

// setTimeout(() => {
//     console.log('Cronômetro rodado!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2500)

console.log('hello!');
console.log('Olá!');