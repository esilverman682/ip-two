import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
 
 export default function App() {
  
  return (
<>
  <div className="flex flex-col justify-center items-center h-screen">
    <div className="tailwindccsok text-center">
      <h1 className="font-black text-9xl bg-gray-100 mix-blend-lighten uppercase">Ok 
        <br /> Tailwind
      </h1>
    </div>
  <a href="https://www.youtube.com/watch?v=kdQLflg1ZC0&t=12s&ab_channel=e.Michel" 
  className="text-blue-500 text-2xl mt-6">Tutorial </a>
  
  </div>
      <style
    dangerouslySetInnerHTML={{
        __html: `   
 
    .tailwindccsok {
          background-image : url('/newyork.webp');
           background-size: cover;
          background-repeat: no-repeat;
    }
 
`
    }}
    />    
    </>
  );
}
