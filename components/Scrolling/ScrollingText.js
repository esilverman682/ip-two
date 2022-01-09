import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Power2 } from "gsap";
 import Hero from '../hero.component'
import { useEffect } from "react";
//import "./styles.css";

export default function ScrollingText() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let masks = document.querySelectorAll('.mask');
    masks.forEach( mask => {
        let image = mask.querySelector('img');
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: mask,
                toggleActions: "restart none none reset"
            }
        });
    
        tl.set(mask, {autoAlpha: 1});
        tl.from(mask, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    })
}, []);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <OldHero /> */}
      <Hero />

      <div style={{ height: "10vh" }}>&nbsp;</div>
    </div>
  );
}
