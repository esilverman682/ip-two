import React, { useContext, useEffect, useRef } from 'react';
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import AnimationContext from '../contexts/animation-context';

export default function Second() {

  let secondRef = useRef(null);
  let textRef = useRef(null);

  let animationContext = useContext(AnimationContext);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: secondRef.current,
        start: "+=10 90%",
        end: "+=10 80%",
        scrub: true,
        markers: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg('#000');
          gsap.to(textRef.current, {
            color: '#73b865',
            duration: 1
          })
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#fff');
          gsap.to(textRef.current, {
            color: '#01385e',
            duration: 2
          })
        }
      }
    })
  }, [])

  return (
    <div ref={secondRef} className='items-center h-screen center' style={{borderTop: '1px solid'}} >
      <h1 className="items-center" ref={textRef}>I am Second</h1>
    </div>
  )
}