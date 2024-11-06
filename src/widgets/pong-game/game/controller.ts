import { Ball } from "./ball";
import { Rect } from "./rect";

export interface Controller {
  onUp(listener: () => any): void;
  onDown(listener: () => any): void;
  onRight(listener: () => any): void;
  onLeft(listener: () => any): void;

  onReleaseUp(listener: () => any): void;
  onReleaseDown(listener: () => any): void;
  onReleaseRight(listener: () => any): void;
  onReleaseLeft(listener: () => any): void;
}


interface ControllerEventBus {
  onUp: (() => any)[],
  onDown: (() => any)[],
  onRight: (() => any)[],
  onLeft: (() => any)[],

  onReleaseUp: (() => any)[],
  onReleaseDown: (() => any)[],
  onReleaseRight: (() => any)[],
  onReleaseLeft: (() => any)[],
}


export class AIController {

  private readonly controllerEventBus: ControllerEventBus = {
    onUp: [],
    onDown: [],
    onRight: [],
    onLeft: [],
    onReleaseUp: [],
    onReleaseDown: [],
    onReleaseRight: [],
    onReleaseLeft: [],
  }

  constructor(
    private readonly currentPaddle: Rect,
    private readonly targetBall: Ball
  ){}

  public update(){

    // when the ball is above
    if(this.targetBall.pos.y + (this.targetBall.rad * 2) < this.currentPaddle.pos.y){
      if(this.currentPaddle.directionMovement.down) this.triggerEventBus("onReleaseDown");
      this.triggerEventBus("onUp");
    }

    // when the ball is below
    else if(this.targetBall.pos.y + (this.targetBall.rad * 2) < this.currentPaddle.pos.y + this.currentPaddle.height){
      if(this.currentPaddle.directionMovement.up) this.triggerEventBus("onReleaseUp");
      this.triggerEventBus("onDown");
    }
  }

  
  private triggerEventBus (key: keyof ControllerEventBus){
    this.controllerEventBus[key].forEach(fn => fn());
  }

  private addEventListener(cb: () => any, key: keyof ControllerEventBus){
    this.controllerEventBus[key].push(cb);
  }

  onUp(listener: () => any): void {
    this.addEventListener(listener, "onUp")
  }
  onDown(listener: () => any): void {
    this.addEventListener(listener, "onDown")
  }
  onRight(listener: () => any): void {
    this.addEventListener(listener, "onRight")
  }
  onLeft(listener: () => any): void {
    this.addEventListener(listener, "onLeft")
  }
  onReleaseUp(listener: () => any): void {
    this.addEventListener(listener, "onReleaseUp")
  }
  onReleaseDown(listener: () => any): void {
    this.addEventListener(listener, "onReleaseDown")
  }
  onReleaseRight(listener: () => any): void {
    this.addEventListener(listener, "onReleaseRight")
  }
  onReleaseLeft(listener: () => any): void {
    this.addEventListener(listener, "onReleaseLeft")
  }
}