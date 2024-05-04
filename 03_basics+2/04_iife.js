// immediately invoked function expression (IIFE)

(function chai(){
  console.log(`DB Connected`);
})();

( (name) => {
  console.log(`DB Connected ${name}`);
})("raj");

