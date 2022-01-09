import React, { useContext, useEffect, useRef } from 'react';
import  gsap  from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import AnimationContext from '../contexts/animation-context';
 
export default function Third() {

  let thirdRef = useRef(null);
  let textRef = useRef(null);

  let animationContext = useContext(AnimationContext);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: thirdRef.current,
        start: "+=200 70%",
        end: "+=200 60%",
        scrub: true,
        markers: true,
        pinSpacing: false,
        onEnter: () => {
          console.log('entered');
          animationContext.setCurrentBg('#a5305e');
          gsap.to(textRef.current, {
            color: '#73b865',
            duration: 1
          })
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#001b2e');
          gsap.to(textRef.current, {
            color: '#51182e',
            duration: 1
          })
        }
      }
    })
  }, [])
  return (
    <div ref={thirdRef} className='h-screen center' style={{borderTop: '1px solid'}} >
      <h1>I am third </h1>
    </div>
  )
}