// const promise1 = new Promise(function(resolve, reject){
//   // Do an async calls
//   // DB calls, cryptography calls
//   setTimeout(function(){
//     console.log('Async task is complete');
//     resolve();
//   }, 1000)
// });
// promise1.then(function (){
//   console.log('Promise Consumed');
// })

// Promise 2
// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async task 2");
//     resolve();
//   }, 2000)
// }).then(function(){
//   console.log("Async to resolve");
// })

// const Promise3 = new Promise(function(resolve, reject){
//   setTimeout(function(){

//     resolve({username: "Chai", email: "chai@example.com"});
//   }, 1000)
// })
// Promise3.then(function(uesr){
//   console.log(uesr);
// })

// const Promise4 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = true;
//     if(!error){
//       resolve({username: "Harsh", password:"12345"})
//     }
//     else{
//       reject('Eroor 404')
//     }
//   }, 1000)
// })
// Promise4
// .then((user) => {
//   console.log(user);
//   return user.username;
// })
// .then((username) => {
//   console.log(username);
// })
// .catch((error) => {
//   console.log(error);
// }).finally(() => {
//   console.log("The Promise is either resolved or rejected");
// })

const promise5 = new Promise((resolve, reject) => {
  setTimeout(function(){
      let error = true;
      if(!error){
        resolve({username: "Javascript", password:"54321"})
      }
      else{
        reject('Error JS Went wrong')
      }
    }, 1000)
})

async function consumePromise5(){
  try{
    const response = await promise5;
    console.log(response);
  }catch(error){
    console.log(error);
  }
}
consumePromise5();

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   }catch(error){
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})