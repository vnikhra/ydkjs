this.a = 1;

let printa = function(){
    console.log(this.a);
}

let printaArrow = () => {
    console.log(this.a);
}

let b = {
    a : 2,
    printa
};

createB = function(){
    return b;
};

//default
printa();
//explicit
printa.bind(b)();
//implicit
b.printa();
//explicit over implicit
printa.bind(this)();
b.printa.bind(this)();
//new over implicit
let c = new createB();
c.a = 4;
c.printa();
//arrow
printaArrow();