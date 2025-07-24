import Landing from "../componets/Landing"
import HeroOne from "../componets/HeroOne"
import HeroMassage from "../componets/Home/HeroMassage"
import HeroFour from "../componets/Home/HeroFour"
import HeroFive from "../componets/Home/HeroFive"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import HeroSix from "../componets/Home/HeroSix"
import HeroFooter from "../componets/Home/HeroFooter"
import ScrollButton from "../componets/Home/ScrollButton"


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });


  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Landing />
          <HeroOne />
          <HeroMassage />
          <HeroFour />
          <div>
            <HeroFive />
            <HeroSix />
          </div>
          <ScrollButton/>
         <HeroFooter/>
        </div>
      </div>
    </main>
  )
}

export default Home
