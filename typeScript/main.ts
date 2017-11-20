
let a:number;
let b:boolean;
let c:string;
let d:any;
let e: number[] = [1,2,3]
let f: any[] = [1, true, "a", false];

const ColorRed = 0;
const ColorGreen = 1;

enum Color {Red = 0, Greem = 1, Blue = 2};
let backgroundColor = Color.Blue;

let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");
console.log(endsWithC);

