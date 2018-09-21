let a = {
    a : 2
};

let b = Object.create(a);

console.log(a.a);
console.log(b.a);

console.log(a.hasOwnProperty("a"));
console.log(b.hasOwnProperty("a"));

// Updating property thru a

b.a++;

// Now both have the property
console.log(a.hasOwnProperty("a"));
console.log(b.hasOwnProperty("a"));