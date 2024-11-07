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

  rotate(angle: number){
    angle = -angle * (Math.PI/180);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vector(
      Math.round(10000*(this.x * cos - this.y * sin))/10000, 
      Math.round(10000*(this.x * sin + this.y * cos))/10000
    );
  }
}


