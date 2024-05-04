const userEmail = "h@harsh.ai"

if (userEmail) {
  console.log("got user email");
}
else{
  console.log("dont have user email");
}

// falsy values
// false
// ""
// null
// undefined
// 0, -0, BigInt
// NaN

//Truthy
// "0"
// "false"
// " "
// [] 
// {}
// function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}
