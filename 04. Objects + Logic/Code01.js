//  Create an object for a student (name, marks) and calculate average.

let total = 0,
  avg = 0,
  subjects = 0,
  student = {
    name: "Harshwardhan",
    marks: {
      english: 80,
      maths: 78,
      science: 88,
      marathi: 78,
      hindi: 74,
    },
  };

for (const i in student.marks) {
  total += student.marks[i];
  subjects++;
}
avg = total / subjects;
avg.toFixed(2);

console.log(`Student : ${student.name}`);

console.log(`Total marks : ${total}`);
console.log(`Average marks : ${avg}`);
