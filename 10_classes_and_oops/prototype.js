// let myName  = "hiteen    "
// console.log(myName.trueLength);

let myHeros = ['thor', 'spiderman']
let heroPower = {
  thor : 'hammer',
  spiderman: 'sling',
  getSpiderPower: function(){
    console.log(`Spidy Power is ${this.spiderman}`);
  }
}
Object.prototype.hitesh = function(){
  console.log('In all objects');
}
Array.prototype.heyHarsh = function(){
  console.log("HELLO Harsh");
}
// heroPower.hitesh()
myHeros.hitesh();