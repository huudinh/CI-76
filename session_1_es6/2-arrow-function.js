console.log('Arrow function');

// function expression, hoisting supported
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

// anonumous function, no hoisting supported 
const multil = function(a, b){
    return a * b;
}

console.log(multil(2, 3));

// arrow function, no hoisting supported
const sub = (a, b) => {
    return a - b;
}
console.log(sub(3, 2));

const devideBy = (a, b) => a / b;
const getAddress = () => ({ city: 'Hanoi' });
console.log(getAddress());