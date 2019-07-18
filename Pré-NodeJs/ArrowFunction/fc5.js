//currying
var add = function(x){
    return function(y){
        return x + y;
    };
};
console.log(add(2)(3));

//implementando

var addCinco = add(5);
var addVinte = add(20);

console.log(addCinco(3));
console.log(addCinco(10));
console.log(addVinte(10));
console.log(addVinte(-20));