import { Controller } from "./controller";
import { Vector } from "./core";

interface BodyConstructor {
  pos: Vector;
  color?: string
  controller?: Controller;
  context: CanvasRenderingContext2D;
  velocity?: Vector
}

export abstract class Body {
  public pos: Vector
  public color: string

  public velocity: Vector;
  public readonly _keyForce = 1;

  protected readonly context: CanvasRenderingContext2D;
  protected  controller?: Controller

  public directionMovement = {
    up: false,
    down: false,
    right: false,
    left: false,
    action: false
  }

  constructor(payload: BodyConstructor){
    this.pos = payload.pos;
    this.color = payload.color ?? "black";
    this.context = payload.context;
    this.velocity = payload.velocity ?? new Vector(5,5);
    this.controller = payload.controller

    this.registerController();
  }

  registerController(){

    if(!this.controller) return;
    this.controller.onDown(() => this.directionMovement.down = true);
    this.controller.onUp(() => this.directionMovement.up = true);
    this.controller.onRight(() => this.directionMovement.right = true);
    this.controller.onLeft(() => this.directionMovement.left = true);

    this.controller.onReleaseDown(() => this.directionMovement.down = false);
    this.controller.onReleaseUp(() => this.directionMovement.up = false);
    this.controller.onReleaseRight(() => this.directionMovement.right = false);
    this.controller.onReleaseLeft(() => this.directionMovement.left = false);
  }

  setController(c: Controller){
    this.controller = c;
    this.registerController;
  }

  abstract keyControll(): void;
  reposition(){
    this.pos = this.pos.add(this.velocity);
  }

  move(){
    this.keyControll();
    this.reposition();
  }

  abstract render(): any;
}