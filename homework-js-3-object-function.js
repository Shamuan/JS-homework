// task 1

function test () {
  console.log(arguments.callee.name, arguments)
}

test(10, false, "google")

// task 2

function userInfo () {
  if(this.registered === true) {
    console.log(`Дата регистрации: ${this.data}`)
  }else{
    console.log(`Незарегистрированный пользователь: ${this.name}`)
  }
};

var Petya = {
 name: 'Petya',
 registered: true,
 data: '21.11.1495'
};
var Manya = {
 name: 'Manya',
 registered: false,
 data: '21.11.1234'
};

Petya.getInfo = userInfo
Manya.getInfo = userInfo

Petya.getInfo()
Manya.getInfo()