// Enum
enum Color {Red = 0, Greem = 1, Blue = 2};
let backgroundColor = Color.Blue;

// Assertions
let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");
console.log(endsWithC);

//Arrow function
let doLog = (message) => console.log(message);

// Interface
interface Point {
    x: number,
    y: number
}

let drawPoint = (point:Point) => {
    //.....
}

// Class