import { useEffect, useRef, useState } from 'react';
 
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import {gsap} from 'gsap'
import AnimationContext from '../components/contexts/animation-context';

function App() {

  const [currentBg, setCurrentBg] = useState('#fff')
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    })
  }, [currentBg]);

  return (
    <>
    <AnimationContext.Provider value={{ setCurrentBg }}>
      <div ref={appRef} className="App pt-64">
        <First />
        <Second />
        <Third />
      </div>
    </AnimationContext.Provider>



    <style
    dangerouslySetInnerHTML={{
        __html: `   
 
 
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

h1 {
  font-size: 10rem;
}

`
}}
/>    
</>

);
}




export default App;