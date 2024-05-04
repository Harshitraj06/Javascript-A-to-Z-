let score = "32"
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof (valueInNumber))

// "33" => 33
// "33abs" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  

// 1 => true; 0 => false
// "" => false
// "name" => false

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)


// **** Operations *****  //

let value = 3
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%2);

let str1 = "hello";
let str2 = " harshit";

let str3 = str1 + str2;
console.log(str3)

console.log("2" + 3);
console.log(2 + "3");
console.log("1" + 2 + 3);
console.log("1" + 2 + 3);

console.log(+true, +false);
console.log(+"");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);


