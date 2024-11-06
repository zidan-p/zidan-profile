import { Body } from "./body";
import { Controller } from "./controller";
import { Vector } from "./core";

interface BallConstructor {
  pos: Vector;
  rad: number;
  color?: string
  controller?: Controller;
  context: CanvasRenderingContext2D;
  velocity?: Vector
}

export class Ball extends Body {
  public rad: number
  public readonly _keyForce = 1;

  constructor(payload: BallConstructor){
    super(payload);
    this.rad = payload.rad;
  }

  keyControll(){
    if(this.directionMovement.left) this.velocity.x = -this._keyForce;
    if(this.directionMovement.up) this.velocity.y = -this._keyForce;
    if(this.directionMovement.right) this.velocity.x = this._keyForce;
    if(this.directionMovement.down)this.velocity.y = this._keyForce;

    if(!this.directionMovement.left && !this.directionMovement.right){
      this.velocity.x = 0;
    }
    if(!this.directionMovement.up && !this.directionMovement.down){
      this.velocity.y = 0;
    }
  }
  reposition(){
    this.pos = this.pos.add(this.velocity);
  }

  move(){
    this.keyControll();
    this.reposition();
  }

  render(){
    this.context.fillStyle = this.color;
    this.context.beginPath(); 
    this.context.arc(this.pos.x, this.pos.y, this.rad , 0, Math.PI*2, false);
    this.context.fill();
    this.context.closePath();
  }
}