// task 1

var letters = []
var str = 'Backend As A Service'

var str = str.split(' ')
str.forEach (str => letters.push(str[0].toUpperCase()))

console.log(letters)

var joinLetters = letters.join('')

console.log(joinLetters)

// task 2

function test(a) {

    if (typeof a === 'number') {
        console.log(new Date().toLocaleString());
    } else {
        console.log('Неверный тип данных')
    }
}
