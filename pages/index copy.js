/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
// import NewHero  from '../components/Hero/NewHero'
import Testimonial from '../components/Hero/Testimonial'
 
//import Clip from '../components/Clip'
 const Comments = dynamic(() => import("../components/Floating"));

const productsDb = [
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 16.0,
    width: '800',
    height: '300'
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 21.15,
    width: '800',
    height: '300'
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 12.0,
    width: '800',
    height: '300'
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 18.4,
    width: '800',
    height: '300'
  },
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 16.0,
    width: '800',
    height: '300'
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 21.15,
    width: '800',
    height: '300'
    
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 12.0,
    width: '800',
    height: '300'
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 18.4,
    width: '800',
    height: '300'
  },
];

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const products = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function IndexPage({ isFirstMount }) {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
 <>
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}


      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
       // className="space-y-12 "
      >
        <motion.h1 variants={title} 
          className=" absolute z-30 right-40 mt-48 font-bold
          text-6xl text-transparent bg-clip-text 
          bg-gradient-to-tr from-red-400 via-red-500 to-red-400
          dark:bg-gradient-to-tr  dark:from-green-600 dark:via-green-400 dark:to-green-600
          ">
          Small Business Loans
        </motion.h1>
        <motion.h2 variants={title} 
          className=" absolute z-30 right-40 mt-64 font-bold
          text-1xl text-transparent bg-clip-text 
          bg-gradient-to-tr from-red-400 via-red-500 to-red-400
          dark:bg-gradient-to-tr  dark:from-green-600 dark:via-green-400 dark:to-green-600
          ">
           Loan Made Easy
        </motion.h2>
        <Testimonial></Testimonial>
        <motion.section variants={products} className="text-gray-700 body-font">
        <div ref={observe}>
        {/* comments will load when inView is true */}
        {inView && <Comments />}
      </div>
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
           {/*
             {productsDb.map((product, index) => (
                <Product key={index} {...product} />
              ))}
           */} 
            </div>
          </div>
        </motion.section>
      </motion.div>
 
    </motion.section> 
    </>
  );
}
const Product = ({ img, category, name, price }) => (
  <div className="w-full p-4 lg:w-1/4 md:w-1/2">   
    <a className="relative block h-48 overflow-hidden rounded">
      <img
        alt="ecommerce"
        className="block object-cover object-center w-full h-full"
        src={img}
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
        {category}
      </h3>
      <h2 className="text-lg font-medium text-gray-900 title-font">{name} </h2>
      <p className="mt-1">${price.toFixed(2)}</p>
    </div>
  </div>
);
const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
    width: '1200px'
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};
const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div  
      className="absolute z-100 flex items-center justify-center w-full 
                 bg-gradient-to-r from-green-900 via-black to-blue-500"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex " >
        <pattern 
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
        <rect className="w-full h-full fill-current" viewBox="0 0 100 300" />
        <motion.rect 
          viewBox="0 0 100 300" 
          variants={text}
          className="w-full h-full text-gray-600 fill-current"
        />
        </pattern>
        <text   
          className="text-3xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Loans For Everyday Business
        </text>
      </motion.svg>
    </motion.div>
  );
};