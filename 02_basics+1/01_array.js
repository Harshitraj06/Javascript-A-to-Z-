const myArr = [0,3,5,6,7]
console.log(myArr[4]);

const myHeros = ['ram', 'krishna', 'shiva']
console.log(myHeros[2]);

myArr.push(23);
myArr.push(283);
console.log(myArr);

myArr.unshift(8)
myArr.shift()
console.log(myArr.includes(4));


console.log(myArr.includes(7));
console.log(myArr.indexOf);

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);



// slice, splice

console.log("A", myArr);
const myn1 =myArr.slice(1, 4)
console.log(myArr);
console.log(myn1);
