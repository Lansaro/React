const arr = [1, 4, 5, 3, 8]

// First (map)
const newArr = arr.map((n, index) => {
    return n + 2;
});

console.log(newArr);

// Second (map)
const newArr2 = arr.map((n) => n + 2);

console.log(newArr2);

// Third (map)
const arr3 = arr.map((item, index) => {
    return index + 5;
})

console.log(arr3);


// Forth (filters)
const arr4 = [1, 3, 5, 7, 9]

const filteredArr = arr.filter((n) => n !== 5);

console.log(filteredArr);

// Fifth (filters)
const filteredArr2 = arr.filter((n, index) => {
    return index !== 1;
})

console.log(filteredArr2);


// Sixth (slice)
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slice1 = x.slice(0, 3);
console.log(slice1);

// Seventh (slice)
const slice2 = x.slice(5);
console.log(slice2);

// Eigth (slice)
const slice3 = x.slice(5, 8);
console.log(slice3);


// Ninth (concat)
const arr10 = [1, 2, 3];
const arr11 = [4, 5, 6];
const final = arr10.concat(arr11);
console.log(final);