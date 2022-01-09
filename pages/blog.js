/* eslint-disable @next/next/no-img-element */
import React, {  useEffect } from "react";
import { gsap } from "gsap";
import  { Expo } from 'gsap';
//import hoverEffect from 'hover-effect/node_modules/gsap'
import hoverEffect from '../node_modules/hover-effect/dist/hover-effect.umd'
import Link from "next/link";

//import './hover-effect.umd'
 

 export default function App() {
  
  useEffect(() => {
    const tl = gsap.timeline();
    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: '/dallas.webp',
      image2: '/Img20.jpg',
      displacementImage: '/diss.png',
      width: "1200px"
     // imagesRatio: 4.5 / 2
    })

    // NAVBAR
    tl.staggerFrom(".navbar div", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    }, 0.08);

    // MEDIA
    tl.staggerFrom(".media ul li", 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-20",
      ease: Expo.easeInOut
    }, 0.08);

    // TEXT
    gsap.from(".text h1 .hidetext", 1.5, {
      delay: 1,
      y: "100%",
      ease: Expo.easeInOut
    });

    gsap.from(".text h3 .hidetext", 1.5, {
      delay: 1.2,
      y: "100%",
      ease: Expo.easeInOut
    });

    gsap.from(".text p .hidetext", 1.5, {
      delay: 1.3,
      y: "100%",
      ease: Expo.easeInOut
    });

    gsap.from(".text h2", 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-10000",
      ease: Expo.easeInOut
    });

    // SPONSOR
    gsap.from(".sponsor img", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    gsap.from(".sponsor p", 1.5, {
      delay: 1.6,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // DISTORTION
    gsap.from(".distortion", 1.5, {
      delay: 2,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // OVERLAY
    gsap.to(".first", 1.5, {
      delay: .5,
      top: "-100%",
      ease: Expo.easeInOut
    });

    gsap.to(".second", 1.5, {
      delay: .7,
      top: "-100%",
      ease: Expo.easeInOut
    });

    gsap.to(".third", 1.5, {
      delay: .9,
      top: "-100%",
      ease: Expo.easeInOut
    });
    gsap.to(".fourth", 3.5, {
      delay: .11,
      top: "-100%",
      ease: Expo.easeInOut
    });
  }, []);

  return (
    <>

<div className="wrapper">
  <div className="
    overlay first                 
  dark:bg-blue-900 
  bg-red-900 
  "> 
  </div>
  <div className="overlay second                   
   dark:bg-blue-900 
  bg-red-900 
  "> 
  </div>
  <div className="overlay third                 
   dark:bg-blue-900 
  bg-red-900 
  "> 
  </div>
  <div className="overlay fourth            
  dark:bg-blue-900 
  bg-red-900 
  "> 
  </div>
 {/* 
 <nav className="navbar">
    <div className="menu">
    </div>
    <div className="lang">
      eng
    </div>
    <div className="search">
    </div>
  </nav>
 */} 
  <div className="media">
    <ul>
      <li>
      <Link href= "/blog"  >           
      <a className="
                  font-body font-extrabold text-transparent 
                  bg-clip-text 
                  dark:text-white
                  text-blue-400 
      
                  transition-all duration-500 transform px-6 py-2 m-4 inline
         
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-125
            ">
            Sales Partner
          </a>
          </Link>
      </li>
 
        
      <li>
      <Link href= "/blog"  >           
      <a className="
 font-body font-extrabold text-transparent  bg-clip-text  dark:text-white text-blue-400  transition-all duration-500 transform  inline hover:text-white hover:opacity-50 hover:shadow-md hover:scale-125 
            ">
            Referral Partner
          </a>
          </Link>
</li>
<li>
        <Link href= "/blog"  >           
          <a className="
 font-body font-extrabold text-transparent  bg-clip-text  dark:text-white text-blue-400  transition-all duration-500 transform  inline hover:text-white hover:opacity-50 hover:shadow-md hover:scale-125 
            ">
            Processing Partner
          </a>
          </Link>

      </li>      
    </ul>
  </div>
  <div className="text">
    <h1>
      <span className="hidetext">Become A</span>
    </h1>
    <h2 className="
      font-body font-extrabold text-transparent bg-clip-text 
      transition-all duration-500 
      dark:from-green-300        
      dark:via-green-500 
      dark:to-green-700 
      bg-gradient-to-tl 
      md:from-red-500 
      from-red-900 
      via-red-500  
      to-red-900 
      text-5xl
      ">
      Partner
    </h2>
    <h3>
      <span className="hidetext">Partner With Us  <br /> 2021</span>
    </h3>
    <p>
      <span className="hidetext">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis, delectus facere
        neque sunt commodi quae
        culpa dolores doloribus magnam?
      </span>
    </p>
  </div>
  <div className="sponsor">
 

    <img src="/tech-daily-pz_L0YpSVvE-unsplash.jpg " alt="" />
    <p>official sponsor</p>
  </div>
  <div className="distortion">   
  </div>
</div>

<style
    dangerouslySetInnerHTML={{
        __html: `   
        @media only screen and (min-width: 768) {
  canvas { 
    width: 2000px; 
    height: 2000px; 
    display: block; 
  }
}
@media only screen and (max-width: 767px) {
  canvas { 
    width: 500px; 
    height: 500px; 
    display: block; 
  }
}
.App {
width: 50%;
    margin: 0 auto;
}

canvas { 
  width: 500px; 
  height: 500px; 
  display: block; 
}
        .wrapper {
          width: 268vh;
    height: 170vh;
    transform: scale(.70);
    transform-origin: top left;
    padding: 0;
    margin: 0;

        }
        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Poppins';
  background: #D8DBE2;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}
ul {
  list-style: none;
}
.navbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}
.navbar > div {
  padding: 0 30px;
  font-size: 20px;
}
.navbar .menu {
  margin-right: auto;
}
.navbar .lang {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}
.media ul {
  position: absolute;
    top: 575px;
    left: -280px;
    transform: rotate(-90deg);
}
.media ul li {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  display: inline-block;
  padding: 0 30px;
}
.text {
  position: absolute;
    top: 300px;
    left: 367px;
    transform: rotate(-90deg);
}
.text h1 {
  font-size: 120px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -10px;
  margin-bottom: 120px;

  position: relative;
  overflow: hidden;
  height: 150px;
  width: 600px;
}
.text h1 .hidetext {
  position: absolute;
}
.text h2 {
  position: absolute;
    top: 147px;
    left: 2px;

    z-index: -1;
    font-size: 116px;
    font-weight: 600;
    letter-spacing: 8px;
    text-transform: uppercase;
}
.text h3 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  padding-left: 10px;
  position: relative;
  overflow: hidden;
  height: 80px;
}
.text h3 .hidetext {
  position: absolute;
}

.text p {
  width: 200px;
  font-size: 12px;
  margin-top: 30px;
  font-weight: 500;
  padding-left: 10px;
  position: relative;
  overflow: hidden;
  height: 110px;
}
.text p .hidetext {
  position: absolute;
}


 
.sponsor {
  position: absolute;
    right: 49px;
    bottom: 58px;
    text-align: center;
    z-index: 20;
}
.sponsor img {
  width: 200px;
  transform: rotate(-90deg);
}
.sponsor p {
  margin-top: 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  transform: rotate(180deg);
}
.distortion {
  width: 90vh;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 115px;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  z-index: 99;
}
.first {
  
}
.second {
 
  left: 33.3%;
}
.third {
 
  left: 66.6%;
}
.fourth {
 
  left: 96.6%;
}
`
}}
/>    
</>
  )
}