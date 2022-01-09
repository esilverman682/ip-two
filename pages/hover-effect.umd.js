/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";
import  { Expo } from 'gsap';
 
import './hover-effect.umd'
  
 export default function App() {
  
  useEffect(() => {
   
    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: './images/01.png',
      image2: './images/02.png',
      displacementImage: './images/diss.png',
      imagesRatio: 380 / 300
    })

    // NAVBAR
    gsap.staggerFrom(".navbar div", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    }, 0.08);

    // MEDIA
    gsap.staggerFrom(".media ul li", 1.5, {
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
      ease: Expo
    });
  }, []);

  return (
    <>
<div className="wrapper">
  <div className="overlay first"></div>
  <div className="overlay second"></div>
  <div className="overlay third"></div>
  <nav className="navbar">
    <div className="menu">
    </div>
    <div className="lang">
      eng
    </div>
    <div className="search">
    </div>
  </nav>
  <div className="media">
    <ul>
      <li>facebook</li>
      <li>instagram</li>
      <li>twitter</li>
    </ul>
  </div>
  <div className="text">
    <h1>
      <span className="hidetext">toni&guy</span>
    </h1>
    <h2>duality</h2>
    <h3>
      <span className="hidetext">collection 2017 <br /> duality</span>
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
    <img src="/sponsor-logo.png" alt="" />
    <p>official sponsor</p>
  </div>
  <div className="distortion">   
  </div>
</div>

<style
    dangerouslySetInnerHTML={{
        __html: `   

        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins';
  background: #D8DBE2;
  width: 100%;
  height: 100vh;
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
  bottom: 250px;
  left: -140px;
  transform: rotate(-90deg);
}

.media ul li {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  display: inline-block;
  padding: 0 30px;
}

 
.text {
  position: absolute;
  top: 200px;
  left: 100px;
  transform: rotate(-90deg);
}

.text h1 {
  font-size: 120px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -10px;
  margin-bottom: 20px;

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
  top: 40px;
  left: -80px;
  color: #EFDE74;
  z-index: -1;
  font-size: 150px;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.text h3 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;

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

  position: relative;
  overflow: hidden;
  height: 110px;
}
.text p .hidetext {
  position: absolute;
}


 
.sponsor {
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: center;
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
  width: 580px;
  height: 720px;
  position: absolute;
  right: 300px;
  bottom: 0;
}

 
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  z-index: 99;
}

.first {
  background: #efde74;
}

.second {
  background: #efde74;
  left: 33.3%;
}

.third {
  background: #efde74;
  left: 66.6%;
}
`
}}
/>    

</>
  )
}


