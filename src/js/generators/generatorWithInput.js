function* foo(x){
    let y = x * (yield );
    return y
}

let it = foo(6);

it.next();
// NOTE: pass value using yield.
console.log(it.next(7));
