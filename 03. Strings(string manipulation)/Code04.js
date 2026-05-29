//  Find the longest word in a sentence.

let sent = "Hi my name is Harsh",
  longest = "",
  wordLength = 0;

sent = sent.split(" ");

for (let i = 0; i < sent.length; i++) {
  if (sent[i].length > wordLength) {
    longest = sent[i];
    wordLength = sent[i].length;
  }
}

console.log(`longest Word is: ${longest}`);
console.log(`Length of Word is: ${wordLength}`);

// Manual splitting of sentence.

let str = "i am a developer",
  arr = [],
  temp = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    temp += str[i];
  } else {
    arr.push(temp);
    temp = "";
  }
}
arr.push(temp);
console.log(arr);
