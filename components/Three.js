/* eslint-disable @next/next/no-img-element */
import React  from "react";
import { gsap, Power2, power1 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  { useEffect } from "react"; 
import Button from "@mui/material/Button"
//import click from "../click.mp3"

export default function Lady() {
    const playClick = () => {
        const audio = new Audio(click)
        audio.play()
      }
  useEffect(() => {
    if (typeof window === "undefined") {
        return;
      }
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
    tl.fromTo(
      ".box1",
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
      },
      {
        delay: 1,
        duration: 1,
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
      }
    )
      .fromTo(
        ".box2",
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
        },
        {
          duration: 1,
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
        },
        "-=0.8"
      )
      .fromTo(
        ".box3 ",
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
        },
        {
          duration: 1,
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
        },
        "-=0.7"
      )
      .from(".main-container img", { duration: 2, scale: 1.5 }, "-=1.5")
      .from(".title1", { duration: 1, y: 300 }, "-=1.5")
      .from(".title2", { duration: 1, opacity: 0, scale: 0.5 }, "-=1")
  }, []);
  return (
 <>

 
<div className="main-container">
 
      <div className="title1">石原 さとみ</div>
      <Button className="title2" variant="outlined" onClick={() => playClick()}>
        <a
          href="https://blog-gray-zeta.vercel.app/"
          style={{ color: "#fff", textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          enter
        </a>
      </Button>
      <div className="box1" />
      <div className="box2" />
      <div className="box3" />

      <img
        src="https://m.media-amazon.com/images/M/MV5BMjM0MTIxNTA0Ml5BMl5BanBnXkFtZTgwMDEzMDE3NjE@._V1_.jpg"
        alt=""
      />
    </div>
<style
    dangerouslySetInnerHTML={{
        __html: `
        body {
  margin: 0;
  padding: 0;
}

.main-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: red;

  .box1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 33.4333vw;
    background-color: black;
    z-index: 10;
  }

  .box2 {
    position: absolute;
    top: 0;
    left: 33.333%;
    height: 100vh;
    width: 33.4333vw;
    background-color: black;
    z-index: 10;
  }

  .box3 {
    position: absolute;
    top: 0;
    left: 66.666%;
    height: 100vh;
    width: 33.4333vw;
    background-color: black;
    z-index: 10;
  }

  .title1 {
    position: absolute;
    width: 250px;
    top: 25%;
    right: 25%;
    font-family: Roboto;
    font-size: 20px;
    color: white;
    writing-mode: vertical-rl;
    z-index: 5;
    text-decoration: none;
  }
  .title2 {
    position: absolute;
    bottom: 15%;
    right: 50%;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.3);
    z-index: 5;
  }

  .title2:hover {
    border: 1px solid rgba(255,255,255,0.7);
  }
}


img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}

`
    }}
    />    
 </>
);};