// NOTE: Promise chain follows order

function fooBar(x) {
    return new Promise(function(resolve, reject){
        if(x){
            resolve();
        }else{
            reject()
        }
    });
}

let p = fooBar(10).then(function(){
    console.log("a");
    p.then(function(){
        console.log("c")
    })
});
p.then(function(){
    console.log("b")
});