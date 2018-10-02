function fooBar(x) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, x)
    })
}

function timeOutPromise(delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject()
        }, delay)
    })
}

//NOTE: Promise ran
Promise.race([
    fooBar(1000),
    timeOutPromise(2000)
]).then(
        function(){
            console.log("Promise fulfilled")
        }
    )
    .catch(
        function(){
            console.log("Promise failed")
        }
    );

// NOTE: Timeout Ran
Promise.race([
    fooBar(2000),
    timeOutPromise(1000)
]).then(
        function(){
            console.log("Promise fulfilled")
        },
        function(){
            console.log("Promise failed")
        }
    );