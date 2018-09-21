class Widget {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.$elem = null
    }
    render($where){
        if(this.$elem){
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
}

class Button extends Widget{
    constructor(width, height, label){
        super(width, height);
        this.label = label || "Default";
        this.$elem = $("<button>").text(this.label);
    }
    render($where){
        super.render($where);
        this.$elem.click(
            this.onClick.bind(this)
        );
    }
    onClick(evt){
        console.log("Button '" + this.label + "' clicked.");
    }
}

$(document).ready(function(){
   let $body = $(document.body);
   let btn1 = new Button(100,50,"Hello");
   let btn2 = new Button(200,100,"World");
   btn1.render($body);
   btn2.render($body);
});