import React, { useState } from "react";
import { motion, useSpring, useMotionTemplate, transform } from "framer-motion";
 import Icon from '../Icon/icon'

export default function App() {
  /* State */
  const [frame, setFrame] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });

  /* Constants */
  /* Customize these to change the intensity of the 
  transforms and the bounciness of the animations. */
  const rotateValue = 15;
  const transformValue = rotateValue * 2;
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const rotateX = useSpring(0, springValue);
  const rotateY = useSpring(0, springValue);
  const x = useSpring(0, springValue);
  const y = useSpring(0, springValue);
  const shadowX = useSpring(0, springValue);
  const shadowY = useSpring(30, springValue);

  /* MotionTemplate for shadow property */
  /* With useMotionTemplate, you can use MotionValues (and thus, useSpring) within strings. This is useful for animating and interpolating properties like Drop Shadow, Box Shadow, Gradients, and many more. */
  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.25))`;

  /* Convert cursor position values */
  const convertCursorPosition = e => {
    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

    rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]));
    rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]));
    x.set(transform(objectX, [0, 1], [-transformValue, transformValue]));
    y.set(transform(objectY, [0, 1], [-transformValue, transformValue]));

    shadowX.set(transform(objectX, [0, 1], [20, -20]));
    shadowY.set(transform(objectY, [0, 1], [60, 20]));
  };

  /* On Mouse Enter, get object frame and convert values */
  const handleMouseEnter = e => {
    const currentElement = e.target.getBoundingClientRect();

    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left
    });

    convertCursorPosition(e);
  };

  /* On Mouse Move, convert values */
  const handleMouseMove = e => {
    convertCursorPosition(e);
  };

  /* On Mouse Leave, reset */
  const handleMouseLeave = e => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    shadowX.set(0);
    shadowY.set(40);
  };

  return (
<div className="container m-auto p-8 text-grey-darkest">

<h1 className="mb-8">Tailwind CSS flex grid</h1>

<h2 className="mb-4">Column Spacing</h2>
<p className="mb-4">Example of column spacing from the <a href="https://tailwindcss.com/docs/examples/grids/#column-spacing" className="text-indigo">documentation.</a></p>

<div className="flex -mx-2 mb-8">
   <div className="w-1/3 px-2">
      <div className="bg-grey-light h-12"></div>
   </div>
   <div className="w-1/3 px-2">
      <div className="bg-grey h-12"></div>
   </div>
   <div className="w-1/3 px-2">
      <div className="bg-grey-light h-12"></div>
   </div>
</div>

<h2 className="mb-4">Responsive 3 col flex grid</h2>

<div className="flex flex-wrap -mx-2 mb-8">
   <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
      <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
         <p>full / half / quarter
         <Icon></Icon>
         </p>
      </div>
   </div>
   <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
      <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
         <p>full / half / quarter</p>
         <Icon></Icon>
      </div>
   </div>
   <div className="w-full lg:w-1/2 px-2">
      <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
         <p>full / half</p>
         <Icon></Icon>
      </div>
   </div>
</div>

<h2 className="mb-4">Using borders for gutters</h2>

<div className="mb-8 p-2 w-full flex flex-wrap bg-grey-light">
   <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey"></div>
   <div className="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey"></div>
   <div className="h-16 border-8 w-full lg:w-1/2 bg-grey"></div>
</div>

</div>
  );
}
