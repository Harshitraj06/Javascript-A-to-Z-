// # Primitive data types
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('311')
const anotherId = Symbol('311')
console.log(typeof id);
console.log(typeof anotherId);

console.log(id === anotherId)

// Non Primitive or Referance types
// Array, Objects, Functions

const heros = ["shaktiman", "batman", "superman"]

let myObj = {
  name : 'harsh',
  age: 21
}

const myFunc = function (){
  console.log("hello world");
}

// Javascript is a dynamically typed language because the variables are defined at runtime not at compile time



//--------------------------------//

// Memory representation

// Stack (Primitive), Heap (Non-Primitive)

let myName = "harshit raj"
let anotherName = myName;
anotherName = "Harry Potter"
console.log(myName);
console.log(anotherName);


let user1 = {
  email : "user@google.com",
  upi: "user@paytm",
}

let user2 = user1;

user2.email = "ram@google.com";
console.log(user1.email);
console.log(user2.email);