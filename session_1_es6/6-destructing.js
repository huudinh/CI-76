console.log('6. Destructing');

const obj = {
    name: 'Mindx',
    age: 20,
    address: {
        city: 'Hanoi',
        street: 'Thanh Cong',
    }
}

// const name = obj.name;
// const age = obj.age;
// const address = obj.address;
// console.log(name);

const { name, age, address, dob } = obj;
console.log(name, age, address, dob)

const coordinate = [0, 1, 1];
const [x, y, z] = coordinate;

console.log(x, y, z);

let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;
