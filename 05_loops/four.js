const myObject = {
  js : "javascript",
  cpp: "c++",
  rb : "ruby"

}

for (const key in myObject) {
  console.log(`${key} shortcut is for${myObject[key]}`);
}

const programming = ["js", "cpp", "python"]
for (const key in programming) {
  console.log(programming[key]);
} 