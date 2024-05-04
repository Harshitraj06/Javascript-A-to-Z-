const user = {
  username : "Harsh",
  logInCount : 4,
  signedIn : true,
  getUserDetails : function(){
    console.log("Got user details from database");
    // console.log(this.username);
    // console.log(this);
  }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(userName, logInCount, isLoggedIn){
  this.userName = userName;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function(){
    console.log(`Welcome ${this.userName}`);
  }
  // return this;
}

const user1 = new User('Hasrh', 3, false);
const user2 = new User('Chai', 5, true); 
console.log(user1);