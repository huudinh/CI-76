console.log('8. Array function');

//map
const mapArr = [1, 2, 3];

const mapArr2 = mapArr.map((item) => {
    return item * 2;
});

console.log(mapArr, mapArr2);

// filter
const filterArr = [1, 2, 3, 4, 5, 6];
const filterArr2 = filterArr.filter((item) => {
    return item % 2 === 0;
});

console.log(filterArr, filterArr2);

// reduce
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = number.reduce((total, item) => {
    return total + item;
}, 0);

console.log(sum)

const multi = number.reduce((total, item) => {
    return total * item;
}, 0);

console.log(multi);