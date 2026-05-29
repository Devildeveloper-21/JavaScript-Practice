//  Count frequency of each character.

let str = "Harshwardhan",
  freq = {};

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  ch = str[i];
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}
console.log(freq);
