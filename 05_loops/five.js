const coding = ['js', 'ruby', 'java', 'cpp']

// coding.forEach(function (item) {
//   console.log(item);
// })

// coding.forEach((item) => {
//   console.log(item);
// })

// function printMe (item){
//   console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arrList) => {
//   console.log(item, index, arrList);
// })

const myCoding = [
  {
    languageName : "javascript",
    languageFileName: "js"
  },
  {
    languageName : "java",
    languageFileName: "java"
  },
  {
    languageName : "c++",
    languageFileName: "cpp"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName);
})