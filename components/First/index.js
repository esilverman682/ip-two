import React, { useEffect, useRef } from 'react';
import { gsap, MotionPathPlugin, Draggable } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
 


//gsap.registerPlugin(MotionPathPlugin);

export default function First() {
  gsap.registerPlugin(ScrollTrigger);
 
 

  return (
    <div className='h-screen center items-center'>
      <h1 className="text-black items-center" >I am First</h1>
    </div>
  )
}