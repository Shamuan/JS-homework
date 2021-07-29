( function() {

    for(var i = 0; i < 100; i++)
    
    setTimeout (
        function () {
            var newData = new Date()
            console.log(newData)
        },
        1000 * i
    )
})()