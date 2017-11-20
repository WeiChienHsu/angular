// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Greem"] = 1] = "Greem";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// Assertions
var message;
message = "abc";
var endsWithC = message.endsWith("c");
console.log(endsWithC);
//Arrow function
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
    //.....
};
// ----> violate the cohesion theory
// Class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + "Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
