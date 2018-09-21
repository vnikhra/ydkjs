let WidgetOLOO = {
    init : function (width, height) {
        this.width = width;
        this.height = height;
        this.$elem = null;
    },
    insert : function ($where){
        if(this.$elem){
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
};

let ButtonOLOO = {
    setup : function(width, height, label) {
        console.log("********", this); // NOTE: if => function is used here then this refers to body because of lexical scope
        this.init(width, height);
        this.label = label;
        this.$elem = $("<button>").text(this.label);
    },
    build : function ($where) {
        this.insert($where);
        this.$elem.click(this.onClick.bind(this));
    },
    onClick : function(evt){
        console.log("clicked on '" + this.label + "' button");
    }
};

Object.setPrototypeOf(ButtonOLOO, WidgetOLOO);


$(document).ready(function(){
   let $body = $(document.body);
   let btn1 = Object.create(ButtonOLOO);
   btn1.setup(100, 50, "Hello");
   let btn2 = Object.create(ButtonOLOO);
   btn2.setup(200, 100, "World");

   btn1.build($body);
   btn2.build($body);
});