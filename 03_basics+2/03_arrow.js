const user = {
  username : "raj",
  price : 999,
  welcomeMessage : function (){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}
user.welcomeMessage();
user.username = "rajkumar"
user.welcomeMessage();
console.log(this);

// function chao(){
//   let username = "harsh"
//   console.log(this.username);
// }
// chao();


const chai = () => {
  let username = "harsh";
  console.log(this);
}

// const addTwo = (n1, n2) => {
//   return n1 + n2;
// }
// console.log(addTwo(3, 6));

// const addTwo = (n1, n2) => n1 + n2;
// const addTwo = (n1, n2) => (n1 + n2);
const addTwo = (n1, n2) => ({username : "harsh"});

console.log(addTwo(3, 6));

const myArray = [3, 5, 6, 1]
myArray.forEach(() => {

})
