(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[169],{6918:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return d}});var i=t(5716),o=t(7294),r=t(6546),s=t.n(r),a=t(5675),c=t(5317),l=t(5893);function d(){i.ZP.registerPlugin(s()),i.ZP.defaults({ease:"none",duration:2});return(0,o.useEffect)((function(){!function(){var n=document.querySelector(".hero"),e=document.querySelector(".slider"),t=document.querySelector("#logo"),o=document.querySelector(".hamburger"),r=document.querySelector(".headline");i.ZP.timeline().fromTo(n,1,{height:"0%"},{height:"80%",ease:c.Lp.easeInOut}).fromTo(n,1.2,{width:"100%"},{width:"80%",ease:c.Lp.easeInOut}).fromTo(e,1.2,{x:"-100%"},{x:"0%",ease:c.Lp.easeOut},"-=1.2").fromTo(t,.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.5").fromTo(o,.5,{opacity:0,y:-40},{opacity:1,y:0},"-=0.5").fromTo(r,.5,{opacity:0,x:100},{opacity:1,x:10,ease:c.eJ.easeOut},"-=0.5")}(),function(){var n=document.querySelector("#container"),e=document.querySelector(".two"),t=document.querySelector(".three"),o=document.querySelector(".four"),r=i.ZP.timeline();r.from(e,{xPercent:-100,opacity:.5}).from(t,{xPercent:100,opacity:.5}).from(o,{yPercent:-100,opacity:.5}),s().create({animation:r,trigger:n,markers:!1,start:"top top",end:"+=4000",scrub:1,pin:!0,anticipatePin:1})}()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"app",children:[(0,l.jsxs)("div",{className:"intro_page",children:[(0,l.jsxs)("header",{children:[(0,l.jsxs)("nav",{children:[(0,l.jsx)("h3",{id:"logo",children:"Dream Vacation"}),(0,l.jsx)("div",{className:"hamburger"})]}),(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"hero",children:[(0,l.jsx)(a.default,{src:"/bench-accounting-C3V88BOoRoM-unsplash.jpg",alt:"image",layout:"fill"}),(0,l.jsx)("h1",{className:"headline",children:"Dream Big"})]})})]}),(0,l.jsx)("div",{className:"slider",style:{background:"linear-gradient(to left, blue[900], blue[300])"}})]}),(0,l.jsx)("div",{className:"canvas_tut",children:"CANVAS"}),(0,l.jsxs)("div",{id:"container",children:[(0,l.jsx)("div",{className:"slide one",children:"ONE"}),(0,l.jsx)("div",{className:"slide two",children:"TWO"}),(0,l.jsx)("div",{className:"slide three",children:"THREE"}),(0,l.jsx)("div",{className:"slide four",children:"FOUR"})]})]}),(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:'\n          @import url("https://fonts.googleapis.com/css?family=Arapey");\n\n          * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n/* INTRO PAGE ANIMATION */\n\n.intro_page {\n  height: 100vh;\n  z-index: 99;\n    position: relative;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(to left, #02351d, #000000);\n  z-index: -1;\n}\n\n\nnav {\n  display: grid;\n  grid-template-columns: 10% 1fr 1fr 10%;\n  min-height: 10vh;\n  color: white;\n  align-items: center;\n}\n\n#logo {\n  opacity: 0;\n  grid-column: 2/4;\n  font-size: 24px;\n}\n\n.hamburger {\n  justify-content: end;\n  position: relative;\n}\n\nsection {\n  display: flex;\n  height: 80vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero {\n  height: 60%;\n  width: 50%;\n  position: relative;\n}\n\n.hero img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.headline {\n  position: absolute;\n  top: 60%;\n  left: 0%;\n  font-size: 60px;\n  transform: translate(-20%, -70%);\n  color: white;\n  z-index: 3;\n}\n.sub-headline {\n  position: absolute;\n  top: 70%;\n  left: 6%;\n  font-size:20px;\n  transform: translate(-20%, -70%);\n  color: white;\n  z-index: 3;\n}\n\n.hero::after {\n  content: "";\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0.3;\n}\n/* CANVAS BASIC */\n\n.canvas_tut {\n  height: 100vh;\n}\n\n/* SLIDE ANIMATION */\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n          \n          .one {\n            position: absolute;\n            background: rgb(255, 75, 75);\n            display: flex;\n            height: 100%;\n            width: 100%;\n            justify-content: center;\n            align-items: center;\n            font-size: 30px;\n            color: white;\n            z-index: 0;\n            overflow: hidden !important;\n          }\n          \n          .two {\n            position: absolute;\n            background: rgb(255, 142, 37);\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 30px;\n            color: white;\n            z-index: 1;\n          }\n          .three {\n            position: absolute;\n            background: rgb(200, 113, 240);\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 30px;\n            color: white;\n            z-index: 2;\n          }\n          .four {\n            position: absolute;\n            background: rgb(72, 241, 67);\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 30px;\n            color: white;\n            z-index: 3;\n          }\n          \n     \n                   '}})]})}},4070:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dream",function(){return t(6918)}])}},function(n){n.O(0,[716,546,774,888,179],(function(){return e=4070,n(n.s=e);var e}));var e=n.O();_N_E=e}]);