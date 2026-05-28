// //  Check if two strings are anagrams.

let str1 = "a gentelman",
  str2 = "elegant man",
  temp = "",
  istrue = true;

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

if (str1.length !== str2.length) {
  console.log("Strings are not Anagrams.");
} else {
  //Sorting elements of strings
  str1 = str1.split("");
  str2 = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] < str1[j]) {
        temp = str1[i];
        str1[i] = str1[j];
        str1[j] = temp;
      }
    }
  }
  for (i = 0; i < str2.length; i++) {
    for (j = 0; j < str2.length; j++) {
      if (str2[i] < str2[j]) {
        temp = str2[i];
        str2[i] = str2[j];
        str2[j] = temp;
      }
    }
  }
}

//Comparing the each values of array stored in strings.
for (i = 0; i < str1.length; i++) {
  if (str1[i] !== str2[i]) {
    istrue = false;
    break;
  }
}

if (istrue == false) {
  console.log("Strings are not Anagrams.");
} else {
  console.log("Strings are Anagrams.");
}

//Another better version using in-built functions.

str1 = "Hello world";
str2 = "hello world";

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

str1 = str1.replaceAll(" ", "");
str2 = str2.replaceAll(" ", "");

str1 = str1.split().sort().join();
str2 = str2.split().sort().join();

if (str1 === str2) {
  console.log("Strings are Anagrams.");
} else {
  console.log("Strings are Anagrams.");
}
