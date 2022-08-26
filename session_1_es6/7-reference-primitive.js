console.log('7. Reference');
// string
//number
// boolean
// null
// underfined
// stymbol

// object, array, function

// primitive data type
let x = 1;
let y = x;

console.log(x === y);

let z = 1;
console.log(x === z);

x = 2;
console.log(x === y);

// reference data type
let foo = {};
let bar = foo;
console.log(foo === bar);

foo.name = 'Mindx';
console.log(bar);

foo = {};
bar = {};
console.log(foo === bar);

foo.name = 'Mindx';
console.log(foo, bar);


