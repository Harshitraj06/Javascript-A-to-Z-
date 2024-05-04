class User{
  constructor(userName){
    this.userName = userName
  }
  logMe(){
    console.log(`UserName is ${this.userName}`);
  }
}
class Teacher extends User{
  constructor(userName){
    super(userName)
    this.email = email;
    this.password = password
  }
  addCourse(){
    console.log(`New Course was added by ${this.username}`);
  }
}
const chai = new Teacher("chai", 'email@123', 'rfr')