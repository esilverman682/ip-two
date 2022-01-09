 
import { useEffect } from 'react';
 import Image from 'next/image'

{/*Reference https://codepen.io/GreenSock/pen/JjYPgdp */}
 export default function businessLoans() {
 
 

  return (
      
      /* eslint-disable @next/next/no-img-element */
<section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrapw-full ">
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <Image alt="..." className="max-w-full rounded-lg shadow-lg" 
    src="/juan-encalada-WC7KIHo13Fc-unsplash.jpg"
    layout='intrinsic'
        width="1500"
        height="1500"
 
         />
  </div>
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <div className="text-red-100 p-3 text-center inline-flex 
      items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-500 mt-8">
        <i className="fas fa-rocket text-xl"></i>
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
      </div>
      <h3 className="text-3xl font-semibold">Revenue Based Financing</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
        The extension comes with three pre-built pages to help you get
        started faster. You can change the text and images and youre
        good to go.
      </p>
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                Carefully crafted components
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Amazing page examples</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Dynamic components</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<footer className="relative  pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
    
        </div>
      </div>
    </div>
  </div>
</footer>
</section>

)
}