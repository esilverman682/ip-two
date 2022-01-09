"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 7448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Some)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1498);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */







{
  {
    /* BEST IMAGE REVEAL REFERENCE : https://www.youtube.com/watch?v=qlx3j0Jm9rY   */
  }
}
function Some() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()));
    let masks = document.querySelectorAll('.mask');
    masks.forEach(mask => {
      let image = mask.querySelector('img');
      let tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          toggleActions: "restart none none reset"
        }
      });
      tl.set(mask, {
        autoAlpha: 1
      });
      tl.from(mask, 1.5, {
        xPercent: -100,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__.Power2.out
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: gsap__WEBPACK_IMPORTED_MODULE_1__.Power2.out
      });
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "img_container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "mask",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
            className: "greensock-icon",
            height: "874",
            src: "https://source.unsplash.com/random/1240x874?sig=76",
            width: "1240",
            alt: ""
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "img_container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "mask",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
            className: "greensock-icon",
            height: "874",
            src: "https://source.unsplash.com/random/1240x874?sig=76",
            width: "1240",
            alt: ""
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "img_container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "mask",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
            className: "greensock-icon",
            height: "874",
            src: "https://source.unsplash.com/random/1240x874?sig=76",
            width: "1240",
            alt: ""
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "img_container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "mask",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
            className: "greensock-icon",
            height: "874",
            src: "https://source.unsplash.com/random/1240x874?sig=76",
            width: "1240",
            alt: ""
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
        dangerouslySetInnerHTML: {
          __html: `

    @import url("https://fonts.googleapis.com/css?family=Arapey");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    /* INTRO PAGE ANIMATION */

    .intro_page {
      height: 100vh;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(to left, #940039, #000000);
      z-index: -1;
    }

    nav {
      display: grid;
      grid-template-columns: 10% 1fr 1fr 10%;
      min-height: 10vh;
      color: white;
      align-items: center;
    }

    #logo {
      opacity: 0;
      grid-column: 2/4;
      font-size: 24px;
    }

    .hamburger {
      justify-content: end;
      position: relative;
    }

    section {
      display: flex;
      height: 80vh;
      justify-content: center;
      align-items: center;
    }

    .hero {
      height: 60%;
      width: 50%;
      position: relative;
    }

    .hero img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .headline {
      position: absolute;
      top: 60%;
      left: 0%;
      font-size: 100px;
      transform: translate(-20%, -70%);
      color: white;
      z-index: 3;
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
    /* CANVAS BASIC */

    .canvas_tut {
      height: 100vh;
    }

    /* SLIDE ANIMATION */

    #container {
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }

    .one {
      position: absolute;
      background: rgb(255, 75, 75);
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
      background: rgb(255, 142, 37);
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
      background: rgb(200, 113, 240);
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
      background: rgb(72, 241, 67);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: white;
      z-index: 3;
    }
    
    
      
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #131313;
    }

    .container {
        max-width: 1320px;
        margin: 0 auto;
    }

    .img_container {
        margin: 20% 0;
        width: 70%;
        position: relative;
    }

    .img_container:nth-child(even) {
        margin-right: 0;
        margin-left: auto;
    }

    img {
        height: 100%;
        width: 100%;
        transform-origin: left;
        object-fit: cover;
    }

    .mask {
        visibility: hidden;
        position: relative;
        width: 80%;
        height: 80%;
        overflow: hidden;
    }
    

    `
        }
      })]
    })
  });
}

/***/ })

};
;