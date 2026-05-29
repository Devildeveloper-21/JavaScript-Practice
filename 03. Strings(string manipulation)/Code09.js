//  Find duplicate characters in a string.

let str = "Harshwardhan",
  freq = {},
  ch = "";

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  ch = str[i];
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
  if (freq[ch] === 2) {
    console.log(ch);
  }
}
