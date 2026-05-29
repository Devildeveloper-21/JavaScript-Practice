//  Count vowels in a string.

let volwels = "aeiou",
  str = "english",
  counter = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < volwels.length; j++) {
    if (str[i] == volwels[j]) {
      counter++;
    }
  }
}
console.log(counter);

//Another way using includes.
counter = 0;

for (i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i])) {
    counter++;
  }
}
console.log(counter);
