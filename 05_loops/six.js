// const coding = ['js', 'ruby', 'java', 'cpp']

// const value = coding.forEach((item) => {
//   console.log(item);
//   return item;
// })
// console.log(value);

const myNums = [6, 5, 3, 5, 8, 0, 1 ]
// const newNums = myNums.filter( (num) => {
//   return num > 4
// })

// const newNums = []
// myNums.forEach((num) => {
//   if(num > 4){
//     newNums.push(num)
//   }
// })

// console.log(newNums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);