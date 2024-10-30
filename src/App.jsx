import Navbar from "./Components/Header"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import About from "./Components/about"
import Hero from "./Components/Hero"
import Review from "./Components/Review"
import Skills from "./Components/Skills"
import Work from "./Components/Work"

import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        opacity: 1,
        y: 0, // Adjust the initial position as needed
        duration: 1,
        ease: 'power2.out',
      });
    });
  });
  return (
    <ReactLenis root>
      <Navbar />
       <Hero />
      <About />
      <Skills />
       <Work />
      <Review />
      <Contact />
      <Footer />
    </ReactLenis>
    
  )
}
export default App;
