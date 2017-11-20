class Point{
    x:number;
    y:number;

    constructor(x:number, y: number){
        this.x = y;
        this.y = x;
    }

    draw(){
        console.log("X: " + this.x + "Y: " + this.y);
    }

    getDistance(another:Point){
        //...
    }
}

let point = new Point(1,2);
point.draw(); 