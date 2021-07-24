function test () {
    for (var i = 0;  i < arguments.length;  i++) {
        console.log(arguments.callee.name, arguments[i])
    }
}

test (10,  false, 'google')
