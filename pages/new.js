/* eslint-disable @next/next/no-img-element */
import  { useEffect }  from "react";
import { gsap, Expo, Power2, Power3, Circ } from "gsap";
 
 
import   Image   from "next/image";

 
 
 export default function App() {
  
  useEffect(() => {
    const tl = gsap.timeline();
 

    tl.to('.left', 2, {
      delay: .8,
      width: '50%',
      ease: Power2.easeInOut
    })

    tl.to('.right', 2, {
      delay: .6,
      width: '50%',
      ease: Power3.easeInOut
    })

    tl.from('.nav', 2, {
      delay: .8,
      opacity: 0,
      ease: Expo.easeInOut
    })

    tl.from('.text h1', 2, {
      delay: .6,
      x: 1000,
      ease: Circ.easeInOut
    })

    tl.from('.text p', 2, {
      delay: .7,
      x: 1000,
      ease: Circ.easeInOut
    })

    tl.to('.karina', 2, {
      delay: 1.5,
      width: '800px',
      ease: Power2.easeInOut
    })

    tl.staggerFrom('.bottomnav ul li', 2, {
      delay: 1,
      x: 1000,
      ease: Circ.easeInOut
    }, 0.08)

    tl.from('.info', 2, {
      delay: 1.5,
      y: 100,
      ease: Circ.easeInOut
    })

    tl.from('.name', 2, {
      delay: 1.5,
      x: -600,
      ease: Circ.easeInOut
    })

  }, []);

  return (
    <>
 <div className="wrapper">
    <div className="left"></div>
    <div className="right"></div>

    <nav className="nav">
      <ul>
        <li className="logo">unsplash</li>
        <li className="menu"><i className="fa fa-bars"></i></li>
        <li className="collection">collection</li>
        <li className="explore">explore</li>
        <li className="search">search</li>
        <li className="profile">
          <div className="img">
          <Image 
              src="/logo.webp" 
              width="180" 
              height="40" 
              alt=""/>          </div>
        </li>
      </ul>
    </nav>

    <div className="content">
      <div className="img-wrapper">
        <div className="karina">
        <Image 
              src="/logo.webp" 
              width="180" 
              height="40" 
              alt=""/>
        </div>
      </div>

      <div className="info">
        <ul>
          <li>unsplash.com</li>
          <li>@karinates</li>
          <li>karinates.com</li>
          <li><i className="fa fa-share-alt"></i></li>
        </ul>
      </div>

      <div className="text">
        <h1>karina tes</h1>
        <p>Fashion Photographer</p>
      </div>

      <div className="name">karina tes</div>

      <div className="bottomnav">
        <ul>
          <li>profile</li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  </div>

<style
    dangerouslySetInnerHTML={{
        __html: `   
     
body {
  font-family: 'Montserrat';
  font-size: 12px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

ul {
  list-style: none;
}

.left,
.right {
  position: absolute;
  width: 50%;
  height: 100%;
  z-index: -1;
}

.left {
  background: #B3B4AF;
  left: 0%;
  width: 0%;
}

.right {
  background: #191921;
  right: 0%;
  width: 100%;
}

.nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  padding: 0 20px;
}

.nav ul li {
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 8px;
  font-weight: 600;
  padding: 0 30px;
}

.nav .logo {
  flex: 1;
  font-size: 18px;
  letter-spacing: 0;
}

.nav .menu {
  flex: 1;
  font-size: 18px;
}

.nav .collection {
  flex: 1;
}

.nav .explore {
  flex: 4;
}

.nav .search {
  flex: 3;
}

.nav .profile {
  flex: 0;
}

.nav .profile .img {
  background-image: url('/profile.jpg');
  background-position: 50%;
  background-size: cover;
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.img-wrapper {
  position: absolute;
  bottom: 0;
  left: 180px;
}

.img-wrapper .karina {
  background-image: url('/karina.jpg');
  background-size: cover;
  height: 550px;
  width: 0;
}

.info {
  position: absolute;
  bottom: 0;
  left: 180px;
  background: rgba(0, 0, 0, .8);
  padding: 0 10px;
}

.info ul li {
  display: inline-block;
  padding: 20px 25px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 8px;
  font-weight: 600;
}

.info i {
  font-size: 18px;
}

.text {
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
}

.text h1 {
  font-size: 90px;
  color: #fff;
  font-family: 'Raiderfont';
  text-transform: uppercase;
}

.text p {
  font-size: 20px;
  color: #fff;
  font-family: monospace;
}

.name {
  position: absolute;
  top: 50%;
  left: -270px;
  transform: translateY(-50%);
  font-size: 90px;
  font-family: 'Raiderfont';
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #fff;
}

.bottomnav {
  position: absolute;
  bottom: 100px;
  right: 100px;
}

.bottomnav ul li {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 15px;
  margin-top: 20px;
}

.bottomnav ul li:nth-child(2) {
  font-weight: bolder;
}

.bottomnav ul li:nth-child(2)::before {
  content: "";
  display: inline-block;
  border: 1px solid #fff;
  width: 65px;
  margin: 0 10px 0 -78px;
  transform: translateY(-3px);
}
`
}}
/>    
</>
  )
}