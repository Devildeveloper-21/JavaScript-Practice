//  Remove duplicates from an array.

let Arr = [1, 2, 2, 2, 3],
  temp;

for (let i = 0; i < Arr.length; i++) {
  temp = Arr[i];
  for (let j = i + 1; j < Arr.length; j++) {
    if (Arr[j] == temp) {
      Arr.splice(j, 1);
      j--;
    }
  }
  console.log(Arr);
}


// splice() is used to remove or add elements.
// Syntax:
        // splice(starting,deletecount);
        // splice(starting,deletecount,newelement)