// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Greem"] = 1] = "Greem";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Blue;
// Assertions
let message;
message = "abc";
let endsWithC = message.endsWith("c");
console.log(endsWithC);
//Arrow function
let doLog = (message) => console.log(message);
let drawPoint = (point) => {
    //.....
};
// ----> violate the cohesion theory
// Class && Object && Constructor
class Point {
    constructor(x, y) {
        this.x = y;
        this.y = y;
    }
    draw() {
        console.log("X: " + this.x + "Y: " + this.y);
    }
    getDistance(another) {
        //...
    }
}
let point = new Point(1, 2);
point.draw();
