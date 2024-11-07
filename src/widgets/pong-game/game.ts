import { Ball } from "./game/ball"
import { AIController } from "./game/controller";
import { Vector } from "./game/core";
import { Rect } from "./game/rect";





interface CanvasDimension {
  height: number;
  width: number;
}

class Game {

  private _ball: Ball;
  private _leftPaddle: Rect;
  private _rightPaddle: Rect;
  private _context: CanvasRenderingContext2D;
  private _canvasDimension: CanvasDimension

  constructor(canvasContext: CanvasRenderingContext2D, canvasDimension: CanvasDimension){
    this._canvasDimension = canvasDimension;
    this._context = canvasContext;

    this._ball = new Ball({
      context: this._context,
      pos: new Vector(canvasDimension.width / 2, canvasDimension.height / 2),
      rad: 10,
      color: "black",
    });

    this._leftPaddle = new Rect({
      context: this._context,
      height: 50,
      width: 10,
      pos: new Vector(0, canvasDimension.height / 2),
      color: "yellow"
    });

    this._rightPaddle = new Rect({
      context: this._context,
      height: 50,
      width: 10,
      pos: new Vector(canvasDimension.width - 10, canvasDimension.height / 2),
      color: "yellow"
    });

    const leftPaddleAiCOntroller = new AIController(this._leftPaddle, this._ball);
    this._leftPaddle.setController(leftPaddleAiCOntroller);

    const rightPaddleAIController = new AIController(this._rightPaddle, this._ball);
    this._rightPaddle.setController(rightPaddleAIController);

  }


  renderLoop(){
    this._context.clearRect(0, 0, this._canvasDimension.height, this._canvasDimension.height);
    this._ball.render();
    this._leftPaddle.render();
    this._rightPaddle.render();
  }

  physicLoop(){
    this._ball.move();
    this._leftPaddle.move();
    this._rightPaddle.move();
  }

  update(){
    this.renderLoop();
    this.physicLoop();
  }
}