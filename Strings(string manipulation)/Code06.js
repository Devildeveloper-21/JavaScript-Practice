//  Remove spaces from a string.

let str = "hi i am a DevilDeveloper",
  temp = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    str.slice(i, 1);
  } else {
    temp += str[i];
  }
}

console.log(temp);

//Better version.

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    temp += str[i];
  }
}
