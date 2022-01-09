(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/useDarkmode.js


function useDarkMode() {
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)( false ? 0 : "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  (0,external_react_.useEffect)(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (false) {}
  }, [theme]);
  return [colorTheme, setTheme];
}

/* harmony default export */ const useDarkmode = (useDarkMode);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/NavMobile.js
/* eslint-disable @next/next/no-img-element */




function NavMobile() {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("header", {
      className: "header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "w-3/12",
        children: /*#__PURE__*/_jsx("a", {
          href: "#",
          children: /*#__PURE__*/_jsxs("svg", {
            viewBox: "0 0 248 31",
            className: "h-6 w-auto hover:text-green-500 duration-200",
            children: [/*#__PURE__*/_jsx("path", {
              d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z",
              fill: "#22C55E"
            }), /*#__PURE__*/_jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z",
              fill: "currentColor"
            })]
          })
        })
      }), /*#__PURE__*/_jsx("nav", {
        className: "nav font-semibold text-lg",
        children: /*#__PURE__*/_jsxs("ul", {
          className: "flex items-center",
          children: [/*#__PURE__*/_jsx("li", {
            className: "p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active",
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Accueil"
            })
          }), /*#__PURE__*/_jsx("li", {
            className: "p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer",
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Produits"
            })
          }), /*#__PURE__*/_jsx("li", {
            className: "p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer",
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Collections"
            })
          }), /*#__PURE__*/_jsx("li", {
            className: "p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer",
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Contact"
            })
          })]
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "w-3/12 flex justify-end",
        children: [/*#__PURE__*/_jsx("a", {
          href: "#",
          children: /*#__PURE__*/_jsx("svg", {
            className: "h-8 p-1 hover:text-green-500 duration-200",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "far",
            "data-icon": "search",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            className: "svg-inline--fa fa-search fa-w-16 fa-9x",
            children: /*#__PURE__*/_jsx("path", {
              fill: "currentColor",
              d: "M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z",
              className: ""
            })
          })
        }), /*#__PURE__*/_jsx("a", {
          href: "#",
          children: /*#__PURE__*/_jsx("svg", {
            className: "h-8 p-1 hover:text-green-500 duration-200",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "far",
            "data-icon": "shopping-cart",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            className: "svg-inline--fa fa-shopping-cart fa-w-18 fa-7x",
            children: /*#__PURE__*/_jsx("path", {
              fill: "currentColor",
              d: "M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z",
              className: ""
            })
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Layout.js









const getUrlPathParams = () => {
  const {
    0: pathParams,
    1: setPathParams
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    var _router$asPath, _router$pathname;

    setPathParams(router === null || router === void 0 ? void 0 : (_router$asPath = router.asPath) === null || _router$asPath === void 0 ? void 0 : _router$asPath.slice(router === null || router === void 0 ? void 0 : (_router$pathname = router.pathname) === null || _router$pathname === void 0 ? void 0 : _router$pathname.length));
  });
  const router = (0,router_namespaceObject.useRouter)();
  return pathParams;
};

const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "font-body flex flex-col min-h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "flex-1 body-font         text-blue-500   dark:text-white dark:bg-gradient-to-r  dark:from-blue-900  dark:via-blue-600   dark:to-blue-900  bg-gradient-to-r  md:from-blue-100  from-blue-200  via-blue-100  to-blue-100  ",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

const Header = () => {
  const [colorTheme, setTheme] = useDarkmode();
  const {
    asPath
  } = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "   lg:block  md:block text-gray-700 body-font font-body dark:text-white fixed z-100 w-full max-w-full  dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-900 dark:to-blue-600  bg-gradient-to-r md:from-blue-500 from-blue-500 via-blue-900 to-blue-600",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col flex-wrap items-center p-1 mx-auto md:flex-row text-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/" + getUrlPathParams(),
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/logo.webp",
            width: "180",
            height: "40",
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/problems-we-solve" + getUrlPathParams(),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: asPath === "/problems-we-solve" ? "  text-white" : "hover:text-green-500 active:bg-green-700",
            children: "Problems We Solve"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/products-we-offer" + getUrlPathParams(),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: asPath === "/products-we-offer" ? "  text-white" : "hover:text-green-500 active:bg-green-700",
            children: "Products We Offer"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/partner-with-us" + getUrlPathParams(),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: asPath === "/partner-with-us" ? "  text-white" : "hover:text-green-500 active:bg-green-700",
            children: "Partner With Us"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog" + getUrlPathParams(),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: asPath === "/blog" ? "  text-white" : "hover:text-green-500",
            children: "Blog"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog" + getUrlPathParams(),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: " active:bg-green-700 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none hover:from-red-900 hover:via-red-600 hover:to-red-900  bg-gradient-to-br from-green-700 via-green-500 to-green-800 text-white  uppercase  font-bold  rounded-none transition-all duration-500 transform px-6 py-2 m-4 inline bg-teal-400   border-1   hover:text-white hover:opacity-50 hover:shadow-md hover:scale-105 ",
            children: "Apply Now"
          })
        }), colorTheme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
          onClick: () => setTheme("light"),
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("svg", {
          onClick: () => setTheme("dark"),
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          })
        })]
      })]
    })
  });
};

const Footer = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
  className: "text-white body-font  dark:bg-gradient-to-r dark:from-green-800 dark:via-black  dark:to-blue-600  bg-gradient-to-tr md:from-red-700 from-red-700 via-black to-blue-500",
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: " flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left text-white",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2 ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: " text-white mb-3 text-sm font-medium tracking-widest title-font pb-5 ",
          children: "About Us"
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["Media Center", "Team", "Careers", "Events", "Success Stories", "The Kapitus Difference", "Developer Documentation", "Blog"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/products-we-offer" + getUrlPathParams(),
          className: "ml-3 divide-y divide-yellow-500",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: " divide-y divide-yellow-500 text-white mb-3 text-sm font-medium tracking-widest title-font ",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "pb-5",
              children: "Products"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["Revenue Based Financing", "Helix Healthcare Financing", "Business Loans", "SBA Loans", "Line Of Credit", "Invoice Factoring", "Equipment Financing", "Purchase Order Financing", "Concierge Services"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/contact-us" + getUrlPathParams(),
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-white mb-3 text-sm font-medium tracking-widest title-font pb-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "pb-5",
              children: "Contact Us"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Links, {
          names: ["(800)222-2222", "Email Us"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full px-4 lg:w-1/4 md:w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: " text-white mb-3 text-sm font-medium tracking-widest title-font pb-10",
          children: "Sign Up For Our Newsletter"
        })
      })]
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-gray-200",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm text-center   sm:text-left text-gray-500",
        children: ["\xA9 2021 Kapitus \u2014", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://#",
          rel: "noopener noreferrer",
          className: "ml-1 text-gray-600",
          target: "_blank",
          children: "Small Business Loans"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "text-gray-500",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            fill: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "5",
              ry: "5"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "0",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              stroke: "none",
              d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
              cx: "4",
              cy: "4",
              r: "2",
              stroke: "none"
            })]
          })
        })]
      })]
    })
  })]
});

const Links = ({
  names
}) => /*#__PURE__*/jsx_runtime_.jsx("nav", {
  className: "mb-10 list-none",
  children: names.map(name => /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: " text-white hover:text-green-500",
      children: name
    })
  }, name))
});

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps,
  router
}) {
  const [isFirstMount, setIsFirstMount] = external_react_default().useState(true);
  external_react_default().useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange); // If the component is unmounted, unsubscribe
    // from the event with the `off` method:

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      exitBeforeEnter: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({
        isFirstMount: isFirstMount
      }, pageProps), router.route)
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,675,664], () => (__webpack_exec__(2108)));
module.exports = __webpack_exports__;

})();