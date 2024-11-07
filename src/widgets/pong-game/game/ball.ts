import { Body } from "./body";
import { Controller } from "./controller";
import { Vector } from "./core";
import { Rect } from "./rect";

interface BallConstructor {
  pos: Vector;
  rad: number;
  color?: string
  controller?: Controller;
  context: CanvasRenderingContext2D;
  velocity?: Vector;
}

export const MAX_ANGLE = 45 as const; 

export class Ball extends Body {
  public rad: number
  public readonly _keyForce = 1;
  public speed: number = 5;


  constructor(payload: BallConstructor){
    super(payload);
    this.rad = payload.rad;
  }

  keyControll(): void {}
  // keyControll(){
    // no key controll for ball
    // if(this.directionMovement.left) this.velocity.x = -this._keyForce;
    // if(this.directionMovement.up) this.velocity.y = -this._keyForce;
    // if(this.directionMovement.right) this.velocity.x = this._keyForce;
    // if(this.directionMovement.down)this.velocity.y = this._keyForce;

    // if(!this.directionMovement.left && !this.directionMovement.right){
    //   this.velocity.x = 0;
    // }
    // if(!this.directionMovement.up && !this.directionMovement.down){
    //   this.velocity.y = 0;
    // }
  // }
  // reposition(){
  //   this.pos = this.pos.add(this.velocity);
  // }

  // move(){
  //   this.keyControll();
  //   this.reposition();
  // }

  render(){
    this.context.fillStyle = this.color;
    this.context.beginPath(); 
    this.context.arc(this.pos.x, this.pos.y, this.rad , 0, Math.PI*2, false);
    this.context.fill();
    this.context.closePath();

  }


  helper(){
    this.context.fillStyle = "red";
    this.context.fillText(`x: ${this.pos.x}, y: ${this.pos.y}`, 20, 20)
    // this.context.fillText(`x: ${this.pos.x}, y: ${this.pos.y}`, this.pos.x + this.rad, this.pos.y - this.rad)
    
    this.context.fillStyle = "red";
    this.context.fillText(`vx: ${this.velocity.x}, vy: ${this.velocity.y}`, 20, 10);
    this.context.fillText(`vy - rad : ${this.pos.y - this.rad} `, 20, 30);


  }


  // i set collisiion of  this shape as teh rect
  collideWithRect(targetRect: Rect){
    if(
      this.pos.x - this.rad < targetRect.pos.x + targetRect.width &&
      this.pos.x + this.rad > targetRect.pos.x &&
      this.pos.y - this.rad < targetRect.pos.y + targetRect.height &&
      this.pos.y + this.rad > targetRect.pos.y 
    ){
      const theta = this.calculateNewVelocityAngle(targetRect);
      const newVelocityX = Math.abs(Math.cos(theta) * this.speed);
      const newVelocityY = (-Math.sin(theta) * this.speed);

      const oldSign = Math.sign(this.velocity.x);
      this.velocity.set( newVelocityX * (-1 * oldSign), newVelocityY);

    }
  }

  onPassTheEdge(containerRect: {height: number, width: number}, cb: () => void){
    if(this.velocity.x > 0){
      if(this.pos.x + this.rad > containerRect.width){
        cb();
      }
    }

    else if(this.velocity.x < 0){
      if(this.pos.x - this.rad < 0){
        cb();
      }
    }
  }

  bounceWithEdge(containerRect: {height: number, width: number}){
    if(this.velocity.y > 0){
      if(this.pos.y + this.rad > containerRect.height){
        this.velocity.set(this.velocity.x, this.velocity.y * -1)
      }
    }
    
    else if(this.velocity.y < 0){
      if(this.pos.y - this.rad < 0){
        this.velocity.set(this.velocity.x, this.velocity.y * -1)
      }
    }
  }


  calculateNewVelocityAngle(paddle: Rect){
    const relativeIntersectY = (paddle.pos.y + (paddle.height / 2)) - (this.pos.y);
    const normalizedIntersectY = relativeIntersectY / (paddle.height / 2 ); //between -1.0 to 1.0
    const thetaDegree = normalizedIntersectY * MAX_ANGLE;
    return thetaDegree * Math.PI / 180; // degree to radian;
  }
}