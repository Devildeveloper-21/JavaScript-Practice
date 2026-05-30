//  Group students by marks (e.g., pass/fail).

let students = [
    { name: "Harsh", marks: 80 },
    { name: "Rohan", marks: 80 },
    { name: "Sagar", marks: 70 },
    { name: "Tanni", marks: 40 },
    { name: "Varad", marks: 50 },
  ],
  pass = [],
  fail = [];

for (let key in students) {
  if (students[key].marks > 40) {
    pass.push(students[key].name);
  } else {
    fail.push(students[key].name);
  }
}
console.log("Pass students : " + pass);
console.log("Fail students : " + fail);
