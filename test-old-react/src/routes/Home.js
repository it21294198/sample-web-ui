import React, { useRef, useEffect } from 'react';
import { Canvas } from '../components/Canvas'

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // Canvas API code goes here
    Canvas(context,canvas)
  }, []);

  return (
    <div className='home'>
      <a href='/demo'>
        <div className='home-main'>
          <h1>View Demo</h1>
        </div>
      </a>
      <canvas ref={canvasRef} className='home-canvas'/>
    </div>
  );
}