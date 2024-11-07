"use client"
import { useEffect, useRef, useState } from "react";
import { Game } from "./game";



const MAX_FPS = 120 as const;
const timeStep = 1000 / MAX_FPS;


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

    const scale = (dpr * rect.width) 

    canvasRef.width = Math.floor(rect.width * dpr);
    canvasRef.height = Math.floor(rect.height * dpr);

    canvasCtx.canvas.style.width = `${rect.width}px`;
    canvasCtx.canvas.style.height = `${rect.height}px`;

    let animationFrameId: number;

    const game = new Game(canvasCtx, {height: canvasRef.height, width: canvasRef.width});
    
    let lastTimeStamp = 0;

    function loop(timeStamp: number) {
      animationFrameId = requestAnimationFrame(loop);
      // canvasCtx.fillStyle = 'white'
      
      if(timeStamp - lastTimeStamp < timeStep) return;

      lastTimeStamp = timeStamp;

      game.update(); 

      // drawStraightLine()
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  },[canvasRef]);





  return (
    <div ref={setCanvasCOntainer} className="w-full h-56">
      <canvas ref={setCanvasRef} className="w-full h-full"/>
    </div>
  )
}