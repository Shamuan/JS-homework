// task 1

var group = [
    {name: "Andrii", lastName: "Rastorhuiev", age: 24, notebook: true},
    {name: "Hennadii", lastName: "Vysotskii", age: 24, notebook: false},
    {name: "Misha", lastName: "Solonina", age: 25, notebook: true}
];

var newGroup = []

function getStudentsList (arrayOfStudents) {
  for (var student of arrayOfStudents) {
    console.log (`${student.name} ${student.lastName} ${student.age} ${student.notebook}`),
    newGroup.push(`${student.name} ${student.lastName}, ${student.age}, ${student.notebook}`)
  }
  return newGroup
}

// task 2

var group = [
    {name: "Andrii", lastName: "Rastorhuiev", age: 24, notebook: true},
    {name: "Hennadii", lastName: "Vysotskii", age: 24, notebook: false},
    {name: "Misha", lastName: "Solonina", age: 25, notebook: true}
];

function addNewStudent (Name, LastName, Age, Notebook) {
    var newStudent = {name: Name, lastName: LastName, age: Age, notebook: Notebook};
    group.push(newStudent);
}

addNewStudent ('Ivan', 'Krilov', 34, true)


// task 5

var names = ["Сергей", "Жора", "Михаил"]
var lastNames = ["Коломенцев", "Григорович", "Солонина"]
var newArray = []

function getFullName () {
  for(var i = 0; i < names.length && lastNames.length; i++) {
    newArray.push(names[i] + ' ' + lastNames[i])
  }
  return newArray
}
