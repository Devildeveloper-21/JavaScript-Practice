//  Replace all vowels with *.

let str = "helloo";

for (let i = 0; i < str.length; i++) {
  if ("aeiuo".includes(str[i])) {
    str = str.replace(str[i], "*");
  }
}
console.log(str);

str = "heello";
let newStr = "";
for (i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i])) {
    newStr += "*";
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
