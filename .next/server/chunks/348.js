"use strict";
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 4348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Lady)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9015);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1498);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1874);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable @next/next/no-img-element */




 //import click from "../click.mp3"




function Lady() {
  const playClick = () => {
    const audio = new Audio(click);
    audio.play();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (true) {
      return;
    }

    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()));
    const tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline();
    tl.fromTo(".box1", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
    }, {
      delay: 1,
      duration: 1,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
    }).fromTo(".box2", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
    }, {
      duration: 1,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
    }, "-=0.8").fromTo(".box3 ", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
    }, {
      duration: 1,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
    }, "-=0.7").from(".main-container img", {
      duration: 2,
      scale: 1.5
    }, "-=1.5").from(".title1", {
      duration: 1,
      y: 300
    }, "-=1.5").from(".title2", {
      duration: 1,
      opacity: 0,
      scale: 0.5
    }, "-=1");
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "main-container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "title1",
        children: "\u77F3\u539F \u3055\u3068\u307F"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "title2",
        variant: "outlined",
        onClick: () => playClick(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
          href: "https://blog-gray-zeta.vercel.app/",
          style: {
            color: "#fff",
            textDecoration: "none"
          },
          target: "_blank",
          rel: "noreferrer",
          children: "enter"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "box1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "box2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "box3"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
        src: "https://m.media-amazon.com/images/M/MV5BMjM0MTIxNTA0Ml5BMl5BanBnXkFtZTgwMDEzMDE3NjE@._V1_.jpg",
        alt: ""
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("style", {
      dangerouslySetInnerHTML: {
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
      }
    })]
  });
}
;

/***/ })

};
;