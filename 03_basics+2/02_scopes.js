var c = 300;


if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "john"
  function two(){
    const website  = "meta"
    console.log(username);
  }
  // console.log(website);
  two();
}
one();