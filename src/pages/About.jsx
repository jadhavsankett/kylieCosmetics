import { useGSAP } from '@gsap/react';
import AboutSecond from '../componets/About/AboutSecond'
import AboutFirst from '../componets/AboutFirst'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import HeroFooter from '../componets/Home/HeroFooter'


const About = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
      <AboutFirst/>
      <div>
      <AboutSecond/>
      </div>
      <HeroFooter/>
      </div>
      </div>
    </div>
  )
}

export default About
