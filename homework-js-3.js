
function test () {
    for (var i = 0;  i < arguments.length;  i++) {
        console.log(test, arguments[i])
    }
}

test (10,  false, 'google')