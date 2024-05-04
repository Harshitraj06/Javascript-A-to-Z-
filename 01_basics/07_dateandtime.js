// dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let myCreatedDate = new Date(2024, 6, 8)
let myCreatedDate = new Date("2024-01-07" )
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getHours());

newDate.toLocaleString('default', {
  weekday:"long",
  timeZone:"Asia/kolkata"
})