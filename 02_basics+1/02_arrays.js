const marvelHeros = ['thor', 'ironman', 'spiderman']
const dcHeros = ['superman', 'flash', 'batman']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const newHeros = marvelHeros.concat(dcHeros)
// console.log(newHeros);

const allHeros = [...marvelHeros, ...dcHeros]
console.log(allHeros);

const anotherArray = [2, 4, 2, [8, 8, 9, [9, 5, 7]]]

const useableArray = anotherArray.flat(Infinity);

console.log(useableArray);

console.log( Array.isArray('ram') );
console.log( Array.from('ram') );
console.log( Array.from({name : 'ram'}) ); // interesting

let score1 = 100
let score2 = 400
let score3 = 300

console.log(Array.of(score1, score2, score3));