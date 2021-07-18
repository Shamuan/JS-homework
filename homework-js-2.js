var letters = []

var string = 'Backend As A service'

var string = x.split(' ', 4)
string.forEach(string => letters.push(string[0].toUpperCase()))

console.log(letters)

var lettersStr = letters.join('')
console.log(lettersStr)

// 

function test(a) {

    if (typeof a === 'number') {
        console.log(new Date().toLocaleString());
    } else {
        console.log('Неверный тип данных')
    }
}
