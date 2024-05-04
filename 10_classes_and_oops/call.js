function setUserName (userName){
  this.userName = userName
}

function createUser(userName, email, password){
  setUserName.call(this, userName)
  // this.userName = userName;
  this.email = email;
  this.password = password;
}

const chai = new createUser('Chai', 'chai@123', '456')
console.log(chai);