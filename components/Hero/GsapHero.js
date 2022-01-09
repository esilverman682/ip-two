/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Hero from "../hero.component";
 


{{/* Reference: https://codesandbox.io/s/gsap-hero-animation-p70nt?file=/src/styles.scss:0-2941 */}}
export default function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
//  const q = gsap.utils.selector(el);
  const el = useRef();

  const tla = useRef();

  const tl = gsap.timeline(
    { 
      delay: 0.8 
    }
  );

  useEffect(() => {
    // Images vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];


    var tl = gsap.timeline();

    // Remove init flash
    gsap.to(
      app, 0, 
      { css: 
        { 
          visibility: "visible" 
        } 
      }
    );

      // Images animation
      tl.from(
        girlImage, 1.2, 
        { 
          y: 1280, 
          ease: "power3.easeOut" 
        }, 
        "Start"
      )
    
      tl.from(
        girlImage.firstElementChild,
        2,
        { 
          scale: 1.6, 
          ease: "power3.easeOut" 
        },
        0.2
      )
      tl.from(
        boyImage, 1.2, 
        { 
          y: 1280, 
          ease: "power3.easeOut" 
        }, 
        0.2
      )
      tl.from(
        boyImage.firstElementChild,
        2,
        { 
          scale: 1.6, 
          ease: "power3.easeOut" 
        },
        0.2
      );

    // Content animation
     tl.staggerFrom(
      [
        headlineFirst.children, 
        headlineSecond.children, 
        headlineThird.children
      ],
      1,
      {
        y: 44,
        ease: "power3.easeOut",
        delay: 0.8
      },
      0.15,
      "Start"
    )
      .from(
        contentP, 1, 
        { 
          y: 20, 
          opacity: 0, 
          ease: "power3.easeOut" 
        }, 
        1.4
      )
      .from(
        contentButton,
        1,
        { 
          y: 20, 
          opacity: 0, 
          ease: "power3.easeOut" 
        },
        1.6
      );
  }, [tl]);

  return (
    <div className="app hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content  ">
            <div className="hero-content-inner dark:text-white" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner
                  font-extrabold text-transparent 
                  bg-clip-text 
                  dark:from-green-300        
                  dark:via-green-500 
                  dark:to-green-300 
                  bg-gradient-to-tr 
                  md:from-red-500 
                  from-red-600 
                  via-red-600  
                  to-red-700 
                  text-5xl
                  ">
                    Your Business 
                  </div>
                </div>
                <div className="hero-content-line    ">
                  <div className="hero-content-line-inner
                                   font-extrabold text-transparent 
                  bg-clip-text 
                  dark:from-green-300        
                  dark:via-green-500 
                  dark:to-green-300 
                  bg-gradient-to-tr 
                  md:from-red-600 
                  from-red-700 
                  via-red-700  
                  to-red-600 
                  text-5xl
                  ">
                  Success 
                    
                  </div>
                </div>
                <div className="hero-content-line text-blue-500 dark:text-blue-200">
                  <div className="hero-content-line-inner">Starts Here</div>
                </div>
              </h1>
              <p className="desc text-blue-500 dark:text-white">
                Whether you need cash infusion for daily operations, growth or to ensure your business financial security we`&apos`ve got you covered.
              </p>
              <div className="btn-row">
                <button className="explore-button text-blue-500 dark:text-white">
                  explore
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
                   →
                   </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" 
              ref=
              {
                el =>
                  (
                    images = el
                  )
              }
            >
              <div className="hero-image girl">
                <img
                  src="/daria-pimkina-tYaccl19A3Q-unsplash.jpg"
                  alt="girl"
                />
              </div>
              <div className="hero-image boy">
                <img
                  src="/stefan-stefancik-pzA7QWNCIYg-unsplash.jpg"
                  alt="boy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
    dangerouslySetInnerHTML={{
        __html: `     
        @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');
 
        .hero {
          height: 100vh;
          visibility: hidden;
        }
          .container {
            width: 100%;
            margin: 0 auto;
          }
            .hero-inner {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 0 0px;
              height: 100vh;
              overflow: hidden;
            }
     

              @media only screen and (min-width: 768px) {
                .hero-content {
                width: 50%;
                position: relative;
                bottom: 100px;
              }
              .hero-images {
                width: 50%;
                height: 100vh;
                position: relative;
              }
}
              @media only screen and (max-width: 767px) {
                .hero-content {
                  width: 10%;
    position: relative;
    bottom: -14rem;
              }
              .hero-images {
                width: 100%;
                height: 100vh;
                position: relative;
              }
}


                .hero-content-inner {
                  width: 400px;
                  margin: 0 auto;
                  color: #323232;
                }
                  h1 {
                    font-weight: 500;
                    font-size: 45px;
                    margin-bottom: 24px;
                  }
                    .hero-content-line {
                      margin: 0;
                      padding-bottom: 10px;
                      height: 49px;
                      overflow: hidden;
                    }
              
                  .desc {
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 300;
                    padding-right: 0;
                    margin-bottom: 56px;
                  }
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
 
        

              .hero-image {
                    position: absolute;
                    overflow: hidden;
              }
              .girl {
                      top: 0;
                      right: 0;
                      width: 45%;
                      height: 50%;
                    }
                .boy {
                      bottom: 175px;
                      left: 0px;
                      width: 52%;
                      height: 65%;
                    }
                    .hero-images  .hero-images-inner .hero-image img {
                      position: absolute;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      width: 100%;
                    }
`
    }}
    />    
    </div>
  );
}
