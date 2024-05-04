function sayName () {
  console.log("R");
  console.log("A");
  console.log("J");
}
// sayName();

function twoSum (n1, n2){
  return(n1 + n2);
}

const result = twoSum(3, 4);
// console.log("result : ", result);

function userLoginMessage(username){
  if(username === undefined){
    return "Please Provide a username";
  }
  let ans = `${username} just logged in`;
  return ans;
}
// console.log(userLoginMessage());

function calculateCartPrice(...num1){
  return num1;
}
console.log(calculateCartPrice(209, 500, 432));

const user = {
  username: "harsh",
  price : 94
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
  username : "Sam",
  price : 562
})

const myNewArray = [200, 400, 500, 700];
function getSecondValue(getArray){
  return getArray[2];
}
// console.log(getSecondValue(myNewArray));
console.log(getSecondValue([200, 800, 700, 500]));
