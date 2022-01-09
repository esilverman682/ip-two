"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 6998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(1498);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/header.component.js

const header_component_Header = (external_styled_components_default()).h1`
  line-height: 84px;
  font-size: 70px;
  text-transform: uppercase;
`;
/* harmony default export */ const header_component = (header_component_Header);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/hero.component.js






const HeaderLine = (/* unused pure expression or super */ null && (styled(Header)`
  opacity: 0;
  transform: translateY(-40);
`));
const RedHeaderLine = external_styled_components_default()(header_component)`
  color: red;
`;

const toId = str => str.replace(" ", "-");

const behaviour = ({
  perm
}) => {
  if (perm) {
    return "play none none none";
  }

  return "restart none none reverse";
};

const Page = (external_styled_components_default()).div`
  ${RedHeaderLine} {
    color: blue;
  }
`;

const animation = ({
  v,
  perm,
  i
}) => ({
  y: -20,
  opacity: 1,
  duration: perm ? 3 : 1,
  delay: perm ? i * 2 : 0,
  scrollTrigger: {
    markers: false,
    trigger: `#${toId(v)}`,
    start: "20px 70%",
    end: "100% 30%",
    scrub: perm ? false : true,
    // onLeaveBack: ({ progress, direction, isActive }) =>
    //   console.log(`#${toId(v)} has triggered onLeaveBack()`, {
    //     progress,
    //     direction,
    //     isActive
    //   }),
    toggleActions: behaviour({
      perm
    })
  }
});

const Hero = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  const text = [{
    v: "Our Our Our Our Our",
    align: "left",
    perm: "true"
  }, {
    v: "Goals",
    align: "left"
  }, {
    v: "when",
    align: "left"
  }, {
    v: "As",
    align: "left"
  }, {
    v: "But",
    align: "left",
    color: "red"
  }, {
    v: "So",
    align: "left"
  }, {
    v: "that",
    align: "left"
  }, {
    v: "eyes",
    align: "left"
  }];
  React.useEffect(() => {
    text.forEach(({
      v,
      perm
    }, index) => {
      gsap.to(`#${toId(v)}`, animation({
        v,
        perm,
        i: index
      }));
    });
  }, []);
  return /*#__PURE__*/_jsx(Page, {
    children: text.map(({
      v,
      align,
      color
    }) => /*#__PURE__*/_jsx(HeaderLine, {
      as: color === "red" ? RedHeaderLine : null,
      id: toId(v),
      style: {
        textAlign: align
      },
      children: v
    }, v))
  });
};

/* harmony default export */ const hero_component = ((/* unused pure expression or super */ null && (Hero)));
;// CONCATENATED MODULE: ./components/Hero/GsapHero.js
/* eslint-disable @next/next/no-img-element */





{
  {
    /* Reference: https://codesandbox.io/s/gsap-hero-animation-p70nt?file=/src/styles.scss:0-2941 */
  }
}
function App() {
  let app = (0,external_react_.useRef)(null);
  let images = (0,external_react_.useRef)(null);
  let content = (0,external_react_.useRef)(null); //  const q = gsap.utils.selector(el);

  const el = (0,external_react_.useRef)();
  const tla = (0,external_react_.useRef)();
  const tl = external_gsap_.gsap.timeline({
    delay: 0.8
  });
  (0,external_react_.useEffect)(() => {
    // Images vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild; // Content vars

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];
    var tl = external_gsap_.gsap.timeline(); // Remove init flash

    external_gsap_.gsap.to(app, 0, {
      css: {
        visibility: "visible"
      }
    }); // Images animation

    tl.from(girlImage, 1.2, {
      y: 1280,
      ease: "power3.easeOut"
    }, "Start");
    tl.from(girlImage.firstElementChild, 2, {
      scale: 1.6,
      ease: "power3.easeOut"
    }, 0.2);
    tl.from(boyImage, 1.2, {
      y: 1280,
      ease: "power3.easeOut"
    }, 0.2);
    tl.from(boyImage.firstElementChild, 2, {
      scale: 1.6,
      ease: "power3.easeOut"
    }, 0.2); // Content animation

    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: "power3.easeOut",
      delay: 0.8
    }, 0.15, "Start").from(contentP, 1, {
      y: 20,
      opacity: 0,
      ease: "power3.easeOut"
    }, 1.4).from(contentButton, 1, {
      y: 20,
      opacity: 0,
      ease: "power3.easeOut"
    }, 1.6);
  }, [tl]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "app hero",
    ref: el => app = el,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "hero-inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hero-content  ",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "hero-content-inner dark:text-white",
            ref: el => content = el,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hero-content-line",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "hero-content-line-inner font-extrabold text-transparent  bg-clip-text  dark:from-green-300         dark:via-green-500  dark:to-green-300  bg-gradient-to-tr  md:from-red-500  from-red-600  via-red-600   to-red-700  text-5xl ",
                  children: "Your Business"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hero-content-line    ",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "hero-content-line-inner font-extrabold text-transparent  bg-clip-text  dark:from-green-300         dark:via-green-500  dark:to-green-300  bg-gradient-to-tr  md:from-red-600  from-red-700  via-red-700   to-red-600  text-5xl ",
                  children: "Success"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hero-content-line text-blue-500 dark:text-blue-200",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "hero-content-line-inner",
                  children: "Starts Here"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "desc text-blue-500 dark:text-white",
              children: "Whether you need cash infusion for daily operations, growth or to ensure your business financial security we`&apos`ve got you covered."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "btn-row",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "explore-button text-blue-500 dark:text-white",
                children: ["explore", /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "arrow-icon  bg-gradient-to-r from-red-300  via-red-500  to-red-600 dark:bg-gradient-to-r dark:from-blue-300  dark:via-blue-500  dark:to-blue-600 shadow ",
                  children: "\u2192"
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hero-images",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "hero-images-inner",
            ref: el => images = el,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hero-image girl",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/daria-pimkina-tYaccl19A3Q-unsplash.jpg",
                alt: "girl"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hero-image boy",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/stefan-stefancik-pzA7QWNCIYg-unsplash.jpg",
                alt: "boy"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("style", {
      dangerouslySetInnerHTML: {
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
      }
    })]
  });
}

/***/ })

};
;