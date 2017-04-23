// Write a sorting function that sorts by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (studentA, studentB){
  if (studentA.name > studentB.name) {
    return 1;
  }
  if(studentA.name  < studentB.name){
    return -1;
  }
  return studentB.age - studentA.age;
});