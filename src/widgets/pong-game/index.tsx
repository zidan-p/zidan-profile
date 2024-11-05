"use client"
import { useEffect, useRef, useState } from "react";






export function PongGame(){

  const [canvasConatiner, setCanvasCOntainer] = useState<HTMLDivElement | null>(null);
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [canvasDimension, setCanvasDimension] = useState<{height?: number, width?: number}>({width: undefined, height: undefined})
  
  useEffect(()=>{
    if(!canvasRef) return;
    if(!canvasConatiner) return;
    if (!canvasCtxRef.current) canvasCtxRef.current = canvasRef!.getContext("2d")!;
    const canvasCtx = canvasCtxRef.current!;
    
    // handle blur
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
    const dpr = window.devicePixelRatio;
    const rect = canvasRef.getBoundingClientRect();

    // const scale = (dpr * rect.width) 

    // console.log(rect);
    console.log(dpr);
    canvasRef.width = Math.floor(rect.width * dpr);
    canvasRef.height = Math.floor(rect.height * dpr);

    console.log(canvasRef.height, canvasRef.width);
    // canvasCtx.scale(dpr,dpr);
    
    canvasCtx.canvas.style.width = `${rect.width}px`;
    canvasCtx.canvas.style.height = `${rect.height}px`;

    let animationFrameId: number;

    const leftPaddle = {
      x: 0,
      y: (canvasRef.height/2) - 50,
      width: 10,
      height: 50,
      color: "yellow",
      score: 0
    }
  
    const rightPaddle = {
      x: canvasRef.width - 10,
      y: (canvasRef.height/2) - 50,
      width: 10,
      height: 50,
      color: "yellow",
      score: 0
    }

    const ball = {
      x: canvasRef.width/2,
      y: canvasRef.height/2,
      radius: 5,
      color: "black",
      speed: 20,
      velocityX: 3, 
      velocityY: 1,
    }

    function drawRect(x: number, y: number, w: number, h: number, color: string) {
      canvasCtx.fillStyle = color;
      canvasCtx.fillRect(x, y, w, h);
    }

    function drawCircle(x: number, y: number, r: number, color: string) {
      canvasCtx.fillStyle = color;
      canvasCtx.beginPath(); 
      canvasCtx.arc(x, y, r, 0, Math.PI*2, false);
      canvasCtx.fill();
      canvasCtx.closePath();
    }

    function move() {
      if(!canvasRef) return;

      ball.x += ball.velocityX; 
      ball.y += ball.velocityY; 
      if ( (ball.y + ball.radius > canvasRef.height ) || (ball.y - ball.radius < 0) ) {
          ball.velocityY =- ball.velocityY;
      } else if ( (ball.x + ball.radius > canvasRef.width ) || (ball.x - ball.radius < 0)) {
          ball.velocityX =- ball.velocityX;
      }

      if(ball.velocityX < 0){
        if(ball.x <= leftPaddle.x + leftPaddle.width && ball.x >= leftPaddle.x &&
          (ball.y >= leftPaddle.y || ball.y <= leftPaddle.y + leftPaddle.height)
        ){
          // todo use boucing rule for paddle rather than simple reflection

          ball.x *= -1;
        }
      }

    }
  
    function draw() {
      canvasCtx.fillStyle = 'white';
      canvasCtx.fillRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);

      drawRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, leftPaddle.color);
      drawRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, rightPaddle.color); 
      drawCircle(ball.x, ball.y, ball.radius, ball.color);

      move();
  
      // drawStraightLine()
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  },[canvasRef])



  return (
    <div ref={setCanvasCOntainer} className="w-full">
      <canvas ref={setCanvasRef} className="w-full"/>
      hello canvas
    </div>
  )
}