// singleton
// Object.create


//object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser = {
  name : "Harsh",
  "full name" : "Harshit raj",
  [mySym1]:"key1",
  age : 23,
  location : "Noida",
  email: "harsh@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym1]);

jsUser.email = "abcd@gmail"
// Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello js User");
}
jsUser.greetingTwo = function(){
  console.log(`Hello js user, ${this.email}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
