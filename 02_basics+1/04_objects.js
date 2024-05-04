//const tinderUser = new Object();  // singleton object

const tinderUser = {}; // non singleton object

tinderUser.id = "234fd"
tinderUser.name = "ali"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email : "some@gmail.com",
  fullname: {
      userFullName:{
        firstName: "hasrh",
        lastName: "raj"
      }
  }
}

console.log(regularUser.fullname?.userFullName.lastName);

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3: 'c', 4 : 'd'}
const obj4 = {9: 'c', 4 : 'd'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( {}, obj1, obj2, obj4)
const obj3 =  {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
  {
  id : 1,
  email: "ram@gmail,com",
  },
  {
  id : 2,
  email: "ram@gmail,com",
  },
  {
  id : 3,
  email: "ram@gmail,com",
  },
  {
  id : 4,
  email: "ram@gmail,com",
  }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn "));

const course = {
  courseName : "Js in hindi",
  price : "999",
  courseInstructor : "Harshit"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//   "name" : "hitesh",
//   "courseName" : "js in hindi",
//   "price" : "free"

// }
[
  {},
  {},
  {}
]