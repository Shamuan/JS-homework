// task 2

var group = [
    {
      name: "Vasya",
      lastName: "Petrov",
      age: 23,
      notebook: false,
  },
  {
      name: "Petro",
      lastName: "vasil",
      age: 21,
      notebook: true,
  },
  {
      name: "Mitya",
      lastName: "Ivanov",
      age: 24,
      notebook: false,
  }
]

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
