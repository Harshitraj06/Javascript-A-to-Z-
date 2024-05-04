const name = "harsh"
const repoCount = 12
console.log(name[2]);

console.log(name + " " + repoCount);

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);

const myName = new String ("harshit");
console.log(myName);
console.log(myName[2]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(5));
console.log(myName.indexOf('i'));

const newString = myName.substring(2, 4);
console.log(newString);

const anotherName = myName.slice(-3, 5);
console.log(anotherName);

const newStringOne = "   fast   forward";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raj.com/harshit%20coding"

console.log(url.replace('%20', '-'));
console.log(url.includes('raja'));