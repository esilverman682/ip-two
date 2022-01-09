import React from "react";
import Link from "next/link";
import useDarkMode from "../components/useDarkmode";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
 import NavMobile from "./NavMobile";
export const getUrlPathParams = () => {
  const [pathParams, setPathParams] = useState("");
  useEffect(() => {
    setPathParams(router?.asPath?.slice(router?.pathname?.length));
  });
  const router = useRouter();
  return pathParams;
};

const Layout = ({ children }) => {
  return (
    <div className="font-body flex flex-col min-h-screen"> 

 
    
  <Header /> 

 
    
 
  
   
      <main className="flex-1 body-font        
                     text-blue-500  
                     dark:text-white
                       dark:bg-gradient-to-r 
                      dark:from-blue-900 
                      dark:via-blue-600  
                      dark:to-blue-900 
                        bg-gradient-to-r 
                      md:from-blue-100 
                      from-blue-200 
                      via-blue-100 
                      to-blue-100 
      ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const { asPath } = useRouter();
  return (
    <header className="  
      lg:block  md:block text-gray-700 body-font font-body dark:text-white fixed z-100 w-full max-w-full 
      dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-900 dark:to-blue-600 
      bg-gradient-to-r md:from-blue-500 from-blue-500 via-blue-900 to-blue-600"
    >
      <div className="container flex flex-col flex-wrap items-center p-1 mx-auto md:flex-row text-white">
        <Link href={"/" + getUrlPathParams()}> 
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          {/*
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 text-white bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >     
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> 
            </svg>
            <span
              className="ml-3 text-xl text-white dark:text-white uppercase">
              Kapitus
            </span>
          */}
            <Image 
              src="/logo.webp" 
              width="180" 
              height="40" 
              alt=""/>
          </a>
      </Link>
      {/* 
      <Link href="/">
        <a
          className={`hover:text-gray-900 ${
          asPath === "/" ? "font-black text-black" : ""
          }`}
        >
          Home
        </a>
      </Link>
      */}         
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
        
          <Link href={"/problems-we-solve" + getUrlPathParams()}> 

            <a
              className={
                asPath === "/problems-we-solve"
                  ? "  text-white"
                  : "hover:text-green-500 active:bg-green-700"
              }
            >
              Problems We Solve
            </a>
          </Link>          
 
          <Link href={"/products-we-offer" + getUrlPathParams()}> 
            <a
              className={
                asPath === "/products-we-offer"
                ? "  text-white"
                  : "hover:text-green-500 active:bg-green-700"
              } 
            >
              Products We Offer
            </a>
          </Link>
          <Link href={"/partner-with-us" + getUrlPathParams()}> 
            <a
              className={
                asPath === "/partner-with-us"
                ? "  text-white"
                  : "hover:text-green-500 active:bg-green-700"
              } 
            >
              Partner With Us
            </a>
          </Link>
          <Link href={"/blog" + getUrlPathParams()}>    
            <a
              className={
                asPath === "/blog"
                ? "  text-white"
                  : "hover:text-green-500"
              }
            >
              Blog
            </a>
          </Link>
         
          <Link href={"/blog" + getUrlPathParams()}>           
          <a className="
            active:bg-green-700
            hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none
          hover:from-red-900 hover:via-red-600 hover:to-red-900 
            bg-gradient-to-br from-green-700 via-green-500 to-green-800
          text-white 
            uppercase 
            font-bold 
            rounded-none
            transition-all duration-500 transform px-6 py-2 m-4 inline
               bg-teal-400  
               border-1  
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-105
            ">
           Apply Now
          </a>
          </Link>
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
            </svg>
            ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="text-white body-font 
                      dark:bg-gradient-to-r dark:from-green-800 dark:via-black  dark:to-blue-600 
                      bg-gradient-to-tr md:from-red-700 from-red-700 via-black to-blue-500">
     
    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
  
      {/*  
      <div className="flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 text-white bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Kapitus</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">
          Air plant banjo lyft occupy retro adaptogen indego
        </p>
      </div> 
      */}


      <div className=" flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left text-white">
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 ">
          <h2 className=" text-white mb-3 text-sm font-medium tracking-widest title-font pb-5 ">
            About Us
          </h2>
          <Links
            names={[
              "Media Center", 
              "Team", 
              "Careers", 
              "Events", 
              "Success Stories", 
              "The Kapitus Difference", 
              "Developer Documentation", 
              "Blog" 
            ]}
          />
 
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <Link href={"/products-we-offer" + getUrlPathParams()} 
        className="ml-3 divide-y divide-yellow-500" 
        >
          <a className=" divide-y divide-yellow-500 text-white mb-3 text-sm font-medium tracking-widest title-font ">
           <h2 className="pb-5">
           Products
           </h2> 
             
          </a>
        </Link> 
      

        <Links
            names={["Revenue Based Financing", "Helix Healthcare Financing", "Business Loans", "SBA Loans", "Line Of Credit", "Invoice Factoring", "Equipment Financing", "Purchase Order Financing", "Concierge Services"]}
          />
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        
        <Link href={"/contact-us" + getUrlPathParams()}
        className="ml-3 text-gray-500" 
        >
          <a className="text-white mb-3 text-sm font-medium tracking-widest title-font pb-10">
            <h2 className="pb-5">
            Contact Us
           </h2> 
          </a>
        </Link> 
        <Links
            names={["(800)222-2222", "Email Us"]}
        />
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className=" text-white mb-3 text-sm font-medium tracking-widest title-font pb-10">
            Sign Up For Our Newsletter
          </h2>
    
        </div>
      </div>
    </div>
    <div className="bg-gray-200">
      <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
        <p className="text-sm text-center   sm:text-left text-gray-500">
          © 2021 Kapitus —
          <a
            href="https://#"
            rel="noopener noreferrer"
            className="ml-1 text-gray-600"
            target="_blank"
          >
            Small Business Loans
          </a>
        </p>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
             d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
);

const Links = ({ names }) => (
  <nav className="mb-10 list-none">
    {names.map((name) => (
      <li key={name}>
        <a className=" text-white hover:text-green-500">{name}</a>
      </li>
    ))}
  </nav>
);

export default Layout;