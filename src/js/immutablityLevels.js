//freeze (seal + no changes)
let a = {
    a: 1,
    b: 2
};
Object.freeze(a);
a.c = 3; // no effect
/*Object.defineProperty(
    b,
    b,
    {
        enumerable : false
    }
)*///this will throw error
a.b = 3; // no effect
console.log(a);

//seal (preventExtensions + no configurability)
let b = {
    a: 1,
    b: 2
};
Object.seal(b);
b.c = 3; // no effect
/*Object.defineProperty(
    b,
    "b",
    {
        enumerable : false
    }
)*///this will throw error
b.b = 3; // changed
console.log(b);

// Prevent extensions
let c = {
    a: 1,
    b: 2
};
Object.preventExtensions(c);
c.c = 3; // no effect
Object.defineProperty(
    c,
    "b",
    {
        writable : false
    }
)//changed
c.a = 2; // changed
c.b = 3; // no change due to define property
console.log(c);
