/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

import useInView from "react-cool-inview";
//import dynamic from "next/dynamic";
 import Image from 'next/image'
  
//import Clip from '../components/Clip'
// const Comments = dynamic(() => import("../components/Floating"));

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
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: isFirstMount ? 2.8 : 0 },
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
  initial: { 
    y: -20, 
    opacity: 0 
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },

};

export default function IndexPage({ isFirstMount }) {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  const transition = {
    delay: 0.2
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
 <>
    <motion.section    
     key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, delay: 9 }}
        >
  
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
       // className="space-y-12 "
       className="h-screen"
      >

<motion.div variants={products}  
            className=" 
             lg:flex mt-32 md:mt-20  w-screen h-auto fade-in  
           text-blue-500 dark:text-white 
             dark:bg-gradient-to-r dark:from-blue-900 dark:via-blue-800  dark:to-blue-900  
             bg-gradient-to-r md:from-blue-100 from-blue-200 via-blue-300 to-blue-100 
            ">

	<div className=" relative" >
  
    <div className="relative lg:w-screen shadow-2xl
      text-white body-font  
        dark:bg-gradient-to-r 
      dark:from-green-800 
      dark:via-black  
      dark:to-blue-600
      dark:bg-blue-900
        bg-gradient-to-tr 
      md:from-red-700 
      from-red-700 
      via-black 
      to-blue-600
    ">
			<Image 
        alt="Card"
        src="/woman-new.webp" 
        layout='intrinsic'
        width='960'
        height='600'
 
        className="max-w-full rounded-lg shadow-lg"
      />
    </div>

		<div className="
                    md:absolute  
                    md:right-0 
                    lg:bottom-20 
                    w-full lg:w-3/6 
                    p-7 sm::p-10 md:p-20 lg:p-20 
                    ml-auto 
                    bg-blue-900 
                    rounded-2xl 
                    z-30
                    ">

		  <div className="flex flex-col lg:w-4/5 hscreen" >
				<div className=" ">

        <motion.h1 variants={title} 
          className=" relative   z-30   font-bold
          text-4xl lg:text-6xl  text-transparent bg-clip-text 
          bg-gradient-to-br from-blue-100 via-red-100 to-blue-100
          dark:bg-gradient-to-tr  dark:from-green-600 dark:via-green-400 dark:to-green-600
          ">
          Small Business Loans
        </motion.h1>
        <motion.h2 variants={title} 
          className="  relative z-30   font-bold
          text-1xl lg:text-2xl  text-transparent bg-clip-text 
          bg-gradient-to-tr from-gray-100 via-blue-300 to-gray-100
          dark:bg-gradient-to-tr  dark:from-gray-100 dark:via-blue-300 dark:to-gray-100
          ">
            Made Easy
        </motion.h2>
 
                </div>
                
                <p className="text-white my-5 transition duration-500 ease-in-out">
                    Lorems ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam,
                    eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                </p>
                <div className="flex justify-between  ">
                <button className="  
transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none
                hover:from-red-900 hover:via-red-600 hover:to-red-900 
                mt-5
                w-screen
                 border
                 border-blue-300
               text-white
                 bg-gradient-to-tr 
                 from-blue-400 
                 via-blue-500 
                 to-blue-400 
                 lg:p-2
                 p-1
                 uppercase 
                 text-1xl 
                 font-bold"
                 >
                 Get Started</button>
                
                    <i className="fas fa-quote-right text-2xl" />
                </div>
            </div>
        </div>
    </div>

    </motion.div>
  </motion.div>
</motion.section> 

    </>
  );
}
 