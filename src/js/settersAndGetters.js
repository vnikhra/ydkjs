let a =  {
    a : 1
}

Object.defineProperty(
    a,
    "b",
    {
        get: function() {
            return _a_;
        },
        set : function(val) {
            _a_ =  val*2
        }
    }
);
a.b = 3;
console.log(a.b);