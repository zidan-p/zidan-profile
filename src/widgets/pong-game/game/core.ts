export class Vector {
  constructor(
    private _x: number, 
    private _y: number
  ){}


  get x(){return this._x}
  set x(val: number) {this._x = val}

  get y(){return this._y}
  set y(val: number) {this._y = val}

  set(xVal: number, yVal: number){
    this._x = xVal;
    this._y = yVal;
  }

  add(v: Vector){ return new Vector(this.x + v.x, this.y + v.y);}

  subtr(v: Vector){ return new Vector(this.x - v.x, this.y - v.y);}

  mag(){ return Math.sqrt(this.x**2 + this.y**2);}

  mult(n: number){return new Vector(this.x*n, this.y*n);}
}


