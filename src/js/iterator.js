
let iteratableObject = {
    a : 1,
    b : 2,
    c : 3
};

Object.defineProperty(
    iteratableObject,
    Symbol.iterator,
    {
        writable: false,
        configurable: true,
        enumerable: false,
        value : function(){
            let object = this;
            let keys = Object.keys(object);
            let i = 0;
            return(
                {
                    next : function(){
                        return{
                            value: object[keys[i++]],
                            done : (i > keys.length)
                        }
                    }
                }
            )
        }
    }
);
for (val of iteratableObject){
    console.log(val);
}