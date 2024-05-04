const myNums = [1, 4, 2, 3, 6, 7, 5, 8, 9];
// const newNums = myNums.map( (num) => nums+10 )

// const newNums = myNums
//                 .map(() => num + 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 30)
// console.log(newNums);

// const myTotal = myNums.reduce(function(acc, currVal){
//   return acc + currVal;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal );

const shoppingCart = [
  {
    itemNAme : " js course",
    price : 299
  },
  {
    itemNAme : " python course",
    price : 699
  },
  {
    itemNAme : " data science course",
    price : 999
  }
]

shoppingCart.reduce((acc, item) => acc + item.price, 0)
