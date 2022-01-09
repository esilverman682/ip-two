/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
 
import { gsap, Power2, Back } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
 
import Image from 'next/image'
 // import ScrollingText from '../components/Scrolling/ScrollingText'
import BusinessLoans from '../components/Products/businessLoans'
import RevenueBasedFinancing from '../components/Products/revenue-based-financing'
import InvoiceFactoring from '../components/Products/invoice-factoring'
import PurchaseOrderFinancing from '../components/Products/purchase-order-financing'
import LineOfCredit from '../components/Products/line-of-credit'
import EquipmentFinancing from '../components/Products/equipment-financing'
import HelixHealthcareFinancing from '../components/Products/helix-healthcare-financing'
import ConciergeServices from '../components/Products/concierge-services'
import SbaLoans from '../components/Products/sba-loans'
 import ImageReveal from '../components/ImageReveals/imageReveal'
import { Line } from "three";
import {Happy} from 'react-happytext'
 


 




export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });

  const introAnimation = () => {
  const slider = document.querySelector(".slider");
  const hero = document.querySelector(".hero");
  const logo = document.querySelector("#logo");
  const hamburger = document.querySelector(".hamburger");
  const headline = document.querySelector(".headline");
  const subheadline = document.querySelector(".subheadline");
  const cta = document.querySelector(".cta");
  const tl1 = gsap.timeline();
  //  gsap.set(hero, {autoAlpha:0}); 
    tl1
      .fromTo(
        hero,
        1.0,
        { height: "0%" },
        { height: "80%",  autoAlpha: 1, ease: Power2.easeInOut }
      )
      .fromTo(
        
        hero,
        1.2,
        { width: "100%" },
        { width: "85%", ease: Power2.easeInOut, opacity: 1 }
      )
      .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeOut, opacity: 1 },
        "-=1.2"
      )
      .fromTo(logo, 0.5, {  x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
      .fromTo(
        hamburger,
        0.5,
        {   y: -40 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        headline,
        0.5,
        { x: 100 },
        { opacity: 1, x: 10, ease: Back.easeOut },
        "-=0.5"
      )
      .fromTo(
        subheadline,
        0.3,
        { x: -100 },
        { opacity: 1, x: 1, ease: Back.easeOut },
        "-=0.3"
      )
      .fromTo(
        cta,
        0.5,
        { x: -10 },
        { opacity: 1, x: 103, ease: Back.easeOut },
        "-=0.5"
      );
  };
 
  const slideAnimation = () => {
    const container = document.querySelector("#container");
    const orange = document.querySelector(".two");
    const purple = document.querySelector(".three");
    const green = document.querySelector(".four");
    const yellow = document.querySelector(".five");
    const red = document.querySelector(".six");
    const blue = document.querySelector(".seven");
    const pink = document.querySelector(".eight");
    const black = document.querySelector(".nine");

    const tl2 = gsap.timeline();

    tl2
      .from(orange, { xPercent: -110, opacity: 0.7 })
      .from(purple, { yPercent: 100, opacity: 0.7 })
      .from(green, { xPercent: -110, opacity: 0.7 })
      .from(yellow, { yPercent: 100, opacity: 0.7 })
      .from(red, { xPercent: -110, opacity: 0.7 })
      .from(blue, { yPercent: 100, opacity: 0.7 })
      .from(pink, { xPercent: -110, opacity: 0.7 })
      .from(black, { yPercent: 100, opacity: 0.7 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: container,
      markers: false,
      start: "top top",
      end: "+=4000",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    });
  };

  useEffect(() => {
    introAnimation();
    slideAnimation();
  }, []);
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app">
      <div className="intro_page">
        <header>
          <nav>
            <h3 id="logo">Products</h3>
            <div className="hamburger" />
          </nav>
          <section>
            <div className="mt-5 hero">
              <Image 
              src="/bench-accounting-C3V88BOoRoM-unsplash.webp" 
              alt=""
              layout='fill'
              //  width='640'
              //  height='428'
              />
              <h1 className="headline">Financing that fits your business</h1>
              <Happy className="headline  " value="Financing that fits your business" />
              <p className="uppercase subheadline">Fast and affordable business Financing</p>
            </div>
            <button className=" text-2xl  border p-4 bg-blue-500 uppercase cta">APPLY NOW</button>
          </section>
        </header>
        <div
          className="slider
          backdrop-filter backdrop-blur-lg 
          dark:bg-gradient-to-tr 
        dark:from-green-800 
        dark:via-black  
        dark:to-blue-500
        dark:bg-blue-600

        bg-gradient-to-tr 
         
        from-red-900 
        via-black 
        to-blue-600"
          style={{
            background: "linear-gradient(to left, red[900], red[300])"
          }}
        >
        </div>
      </div>
 
      <div id="container">
        <div className="slide one"> 
          <BusinessLoans></BusinessLoans>
        </div>
        <div className="slide two">
          <EquipmentFinancing></EquipmentFinancing>
        </div>
        <div className="slide three">
          <HelixHealthcareFinancing></HelixHealthcareFinancing>
        </div>
        <div className="slide four">
          <RevenueBasedFinancing></RevenueBasedFinancing>
        </div>
        <div className="slide five">
         <LineOfCredit></LineOfCredit>
        </div>
        <div className="slide six">
        <InvoiceFactoring></InvoiceFactoring>
        </div>
        <div className="slide seven">
          <PurchaseOrderFinancing></PurchaseOrderFinancing>
        </div>      
        <div className="slide eight">
          <SbaLoans></SbaLoans>
        </div>          
        <div className="slide nine">
          <ConciergeServices></ConciergeServices>   
        </div>    
       
      </div>
      <style
        dangerouslySetInnerHTML={{
            __html: `
    
    

    .intro_page {
      height: 80vh;
      z-index: 99;
        position: relative;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
    
    
      z-index: -1;
      opacity:0;
    }

    
    section {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

    .hero {

      height: 60%;
      width: 50%;
      position: relative;
      opacity:0;
    }

    .hero img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .headline {
      position: absolute;
      top: 45%;
      left: 55px;
      font-size: 60px;
      transform: translate(-20%, -70%);
      color: white;
      z-index: 3;
      opacity:0;
    }
    .subheadline {
      position: absolute;
      top: 52%;
      left: 69px;
      font-size:20px;
      transform: translate(-20%, -70%);
      color: white;
      z-index: 3;
      opacity:0;
    }
    .cta {
      position: absolute;
        top: 85%;
        left: 171px;
        font-size: 20px;
        transform: translate(-20%, -70%);
        color: white;
        z-index: 3;
        opacity: 0;
    }
    
    .hero::after {
      content: "";
      background: black;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.3;
    }
    

    .canvas_tut {
      height: 100vh;
    }

    

    #container {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }

    .one {
      position: absolute;
      background: #001b2e;
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 0;
      overflow: hidden !important;
    }

    .two {
      position: absolute;
      background: #a5305e;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 1;
    }

    .three {
      position: absolute;
      background: #01385e;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 2;
    }
    
    .four {
      position: absolute;
      background: #456e3d;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 3;
    }
    .five {
      position: absolute;
      background: #012a47;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 4;
    }
    .six {
      position: absolute;
      background: #631d38;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 5;
    }
    .seven {
      position: absolute;
      background: #02351d;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 6;
    }
    .eight {
      position: absolute;
      background: pink;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 6;
    }
    `
        }}
      />     
    </div>
  );
}
