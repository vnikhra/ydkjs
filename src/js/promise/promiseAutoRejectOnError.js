let p = new Promise(function(resolve, reject) {
    // NOTE: But deliberately swallowing error is allowed !!!
    //try{
        foo.bar();
        resolve();
    //}catch (e) {

    //}
});

p.then(
    function(){
        console.log("resolved")
    },
    function(){
        console.log("rejected")
    }
)