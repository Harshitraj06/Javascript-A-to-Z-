// generate a random colour

const randomColour = function(){
  const hex = "0123456789ABCDEF";
  let colour = '#'
  for(let i=0; i<6; i++){
    colour += hex[(Math.floor(Math.random() * 16))]
  }
  return colour;
}
let intervalId;
const startColourChange = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }
  function changeBgColor(){
    document.body.style.backgroundColor = randomColour();
  }
}
const stopColourChange = function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click', startColourChange)

document.querySelector('#stop').addEventListener('click', stopColourChange)
