import { Body } from "./body";
import { Controller } from "./controller";
import { Vector } from "./core";

interface RectConstructor {
  pos: Vector;
  width: number;
  height: number;
  color?: string
  controller?: Controller;
  context: CanvasRenderingContext2D;
  velocity?: Vector
}


export class Rect extends Body {
  public width: number
  public height: number
  public readonly _keyForce = 1;

  public directionMovement = {
    up: false,
    down: false,
    right: false,
    left: false,
    action: false
  }

  constructor(payload: RectConstructor){
    super(payload);
    this.width = payload.width;
    this.height = payload.height;
  }

  keyControll(){
    if(this.directionMovement.up) this.velocity.y = -this._keyForce;
    if(this.directionMovement.down) this.velocity.y = this._keyForce;
  }

  render(){
    this.context.fillStyle = "black";
    this.context.fillText(`x : ${this.pos.x}, y: ${this.pos.y} `, this.pos.x, this.pos.y);
    this.context.fillStyle = this.color;
    this.context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}