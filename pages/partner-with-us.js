/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import  { Expo } from 'gsap';
import Lottie from 'react-lottie';
import animationData from '../public/lott.json';
 
 
 

{{/* Reference: https://codesandbox.io/s/gsap-hero-animation-p70nt?file=/src/styles.scss:0-2941 */}}
export default function App() {
 

 
  let app = useRef(null);
  let images = useRef(null);
  let contents = useRef(null);
//  const q = gsap.utils.selector(el);
  const el = useRef();

  const tla = useRef();

  const tl = gsap.timeline(
    { 
      delay: 0.8 
    }
  );

  useEffect(() => {
   

 
    
   
    var tl = gsap.timeline();

    gsap.from('.logo', 1, {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    tl.staggerFrom('.menu-links ul li', 1, {
      delay: 1.2,
      opacity: 0,
      x: -20,
      ease: Power4.easeInOut
    }, 0.08)

    gsap.from('.search', 1, {
      delay: 1.6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.from('.cart', 1, {
      delay: 1.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.to('.border-bottom', 1, {
      delay: 1.4,
      width: '100%',
      ease: Expo.easeInOut
    })

    gsap.from('.subtitle', 1, {
      delay: 2.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.to('.title', 1, {
      delay: 2.2,
      width: '100%',
      ease: Expo.easeInOut
    })

    gsap.from('.desc', 1, {
      delay: 2.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.from('.readmore', 1, {
      delay: 2.8,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.to('.slider', 1, {
      delay: 3,
      opacity: 1,
      ease: Expo.easeInOut
    })

    gsap.to('.img-1', 1, {
      delay: 2.2,
      width: '450px',
      ease: Expo.easeInOut
    })

    gsap.to('.img-2', 1, {
      delay: 2.2,
      width: '300px',
      ease: Expo.easeInOut
    })

    gsap.to('.img-3', 1, {
      delay: 2.2,
      width: '300px',
      ease: Expo.easeInOut
    })

    gsap.to('.first', 1.5, {
      delay: .2,
      left: '-100%',
      ease: Expo.easeInOut
    })

    gsap.to('.second', 1.5, {
      delay: .4,
      left: '-100%',
      ease: Expo.easeInOut
    })

    gsap.to('.third', 1.5, {
      delay: .6,
      left: '-100%',
      ease: Expo.easeInOut
    })
  }, [tl]);

  return (
    <>
<div className="overlay first dark:from-bg-blue-900 dark:via-blue-900 dark:to-blue-900
  
  bg-gradient-to-tr
                   from-red-900 
                   via-red-900 
                   to-red-900 
  
   "></div>
  <div className="overlay second dark:from-bg-blue-900 dark:via-blue-900 dark:to-blue-900
    bg-gradient-to-tr
                   from-red-900
                   via-red-900
                   to-red-900 "></div>
  <div className="overlay third dark:from-bg-blue-900 dark:via-blue-900 dark:to-blue-900
    bg-gradient-to-tr
                   from-red-900
                   via-red-900
                   to-red-900 "></div>


 

  <hr className="border-bottom" />

  <div className="contents">

    <div className="text text-blue-500 dark:text-white">
      <p className="subtitle ">Together 
      </p>
 <div>
    <h1 className="title inline-block ">
        <span> We Help Businesses Grow  </span>
      </h1>
 </div>  
      <p className="desc ">Join us to help small businesses get the financing <br />they need wutg a oartner they can trust. </p>
      <div className="subtitle btn-row">
                <button className="explore-button text-blue-500 dark:text-white">
                
                  <div className="arrow-icon 
                  bg-gradient-to-r
                   from-red-300 
                   via-red-500 
                   to-red-600
                   
                   dark:bg-gradient-to-r
                   dark:from-blue-300 
                   dark:via-blue-500 
                   dark:to-blue-600
                   shadow
                   "
                   >
                     SIGN UP
                   </div>
                </button>
              </div>
    </div>

    <div className="img-1"></div>

    <div className="slider">
 
      <div className="pages">
      
      </div>
    </div>

    <div className="img-2"></div>

    <div className="img-3"></div>

  </div>

      <style
    dangerouslySetInnerHTML={{
        __html: `     

        .btn-row {
                    position: relative;
                    left: 40%;
                  }
                  .btn-row:before {
                      position: absolute;
                      content: "";
                      width: 56px;
                      height: 1px;
                      background: #dfdfdf;
                      top: 50%;
                      left: -68px;
                    }
        
                    button {
                      background: none;
                      border: none;
                      font-size: 12px;
                      padding: 0;
                      cursor: pointer;
                      text-transform: uppercase;
                      font-weight: 700;
                      letter-spacing: .7px;
                      display: flex;
                      align-items: center;
                      position: relative;
                    }
                    button:focus {
                        outline: none;
                      }
        
                      .arrow-icon {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      /*  background: #007fff;
                      */
                        height: 42px;
                        width: 42px;
                        border-radius: 50vh;
                        left: 80px;
                        color: white;
                        font-size: 1.5em;
                      }
 
 

ul {
  list-style: none;
}

/*img {
  width: 100%;
  height: auto;
  z-index: -1;
}*/

.nav {
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 1;
}

.border-bottom {
  position: absolute;
  top: 100px;
  width: 0%;
  z-index: 1;
  border-color: rgba(255,255,255, .2);
  border-width: .5px;
}

.logo,
.menu-links,
.search,
.cart {
  position: absolute;
  padding: 20px;
}

.logo {
  width: 100px;
}

.menu-links {
  left: 100px;
  line-height: 1;
  margin-left: 30px;
}

.menu-links ul li {
  display: inline-block;
  padding: 20px 30px;
  color: rgba(255,255,255, .5);
}

.search,
.cart {
  line-height: 3;
  font-size: 20px;
}

.search {
  right: 150px;
}

.cart {
  right: 50px;
}

.text {
  position: relative;
    z-index: 1;
    max-width: 800px;
    height: 100vh;
    margin: 15rem;
}

.subtitle {
  text-transform: uppercase;
  font-size: 14px;
}

.subtitle::before {
  display: inline-block;
  content: "";
  border: 1px solid #01385e;
  width: 80px;
  margin: 0 10px 0 0;
  transform: translateY(-4px);
}

.title {
  font-size: 3rem;
  text-transform: uppercase;
  width: 0%;
  overflow: hidden;
  white-space: nowrap
}

.desc {

    line-height: 1.5;
    font-size: 2rem;
}

.readmore {
  display: inline-block;
  margin-top: 80px;
  color: #fff;
  border-bottom: 1px solid #fff;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 3px;
  font-weight: bolder;
}

.img-1 {
  position: absolute;
  top: 300px;
  right: 320px;
  transform: translateY(-50%);
  background: url('/brooke-cagle-WHWYBmtn3_0-unsplash.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 0;
  height: 600px;
}

.slider {
  position: absolute;
  bottom: 100px;
  right: 320px;
  width: 450px;
  opacity: 0;
}

.arrows {
  float: left;
}

.pages {
  float: right;
}

.pages span {
  font-size: 40px;
  font-weight: bolder;
  line-height: .8;
}

.arrows ul li {
  display: inline-block;
  background: #2F302F;
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.img-2 {
  position: absolute;
  top: 320px;
  right: 0;
  transform: translateY(-50%);
  background: url('/thisisengineering-raeng-vkAlKgRymZ4-unsplash.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 0;
  height: 350px;
  margin-bottom: 30px;
}

.img-3 {
  position: absolute;
  top: 820px;
  right: 0;
  transform: translateY(-50%); 
  background: url('/bruce-mars-8YG31Xn4dSw-unsplash.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 0;
  height: 600px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0%;
  z-index: 2;
/*  background: #51182e;*/
  opacity: 1;
}

.first {
  top: 0;
}

.second {
  top: 33.3%
}

.third {
  top: 66.6%;
}

@media(max-height: 720px) {
  .text {
    top: 360px;
    left: 360px;
  }

  .title {
    font-size: 100px;
  }

  .desc {
    margin-top: 30px;
  }

  .readmore {
    margin-top: 60px;
  }

  .img-1 {
    top: 240px;
    right: 330px;
    height: 480px;
  }

  .slider {
    right: 330px;
  }

  .img-2 {
    top: 270px;
    height: 280px;
  }

  .img-3 {
    top: 740px;
  }
}
`
    }}
    />    
</>
  );
}
