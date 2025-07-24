import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Part1 from "../componets/Products/Part1"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroFooter from "../componets/Home/HeroFooter";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Products = () => {

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
          <Part1 />
          <div>
            <HeroFooter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
