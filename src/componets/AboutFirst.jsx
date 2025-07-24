import './AboutFirst.css'
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutFirst = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Great Horned Owl Sequence
        gsap.set(".circle", { yPercent: -5 });
        gsap.set(".dotsBlue", { yPercent: 10 });
        gsap.set(".owlHorned", { yPercent: -20 });
        gsap.set(".clusterGreat", { yPercent: 5 });

        gsap.to(".circle", {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterGreat",
                scrub: 1,
            },
        });

        gsap.to(".dotsBlue", {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterGreat",
                scrub: 1,
            },
        });

        gsap.to(".owlHorned", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterGreat",
                scrub: 1,
            },
        });

        gsap.to(".caption", {
            yPercent: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterGreat",
                end: "bottom center",
                scrub: 1,
            },
        });

        gsap.to(".clusterGreat", {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterGreat",
                end: "bottom center",
                scrub: 1,
            },
        });

        // Burrowing Owl Sequence
        gsap.set(".triangle", { yPercent: 25, rotation: -90 });
        gsap.set(".dotsWhite", { yPercent: 10 });
        gsap.set(".owlBurrowing", { yPercent: -20 });
        gsap.set(".clusterBurrowing", { yPercent: 5 });

        gsap.to(".triangle", {
            yPercent: -5,
            rotation: 40,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterBurrowing",
                scrub: 1,
            },
        });

        gsap.to(".dotsWhite", {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterBurrowing",
                scrub: 1,
            },
        });

        gsap.to(".owlBurrowing", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterBurrowing",
                scrub: 1,
            },
        });

        gsap.to(".captionBurrowing", {
            yPercent: 200,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterBurrowing",
                end: "bottom center",
                scrub: 1,
            },
        });

        gsap.to(".clusterBurrowing", {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
                trigger: ".clusterBurrowing",
                end: "bottom center",
                scrub: 1,
            },
        });

        // SplitText Animations
        let SplitGreat = new SplitText(".titleGreathorned", { type: "words,chars" });
        let charsGreat = SplitGreat.chars;
        let tlSplitGreat = gsap.timeline({
            onComplete: () => {
                SplitGreat.revert();
            },
        });

        tlSplitGreat.from(charsGreat, {
            duration: 0.8,
            opacity: 0,
            y: 10,
            ease: "circ.out",
            stagger: 0.02,
        });

        function setupSplits() {
            let SplitBurrowing = new SplitText(".titleBurrowing", { type: "words,chars" });
            let charsBurrowing = SplitBurrowing.chars;

            gsap.from(charsBurrowing, {
                duration: 0.8,
                opacity: 0,
                y: 10,
                ease: "circ.out",
                stagger: 0.02,
                scrollTrigger: {
                    trigger: ".titleBurrowing",
                    start: "top 75%",
                    end: "bottom center",
                    scrub: 1,
                },
                // onComplete: () => { SplitBurrowing.revert() }
            });
        }


        ScrollTrigger.addEventListener("refresh", setupSplits);
        setupSplits();

        // Cleanup
        return () => {
            ScrollTrigger.removeEventListener("refresh", setupSplits);
            gsap.killTweensOf([
                ".circle",
                ".dotsBlue",
                ".owlHorned",
                ".clusterGreat",
                ".triangle",
                ".dotsWhite",
                ".owlBurrowing",
                ".clusterBurrowing",
                ".caption",
                ".captionBurrowing",
                ".titleGreathorned",
                ".titleBurrowing",
            ]);
        };
    }, []);

    return (
        <>
            <div className='scrolling'>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />

                <img className='bg-first' src="./kyli-big.jpg" alt="" />

                <section>
                    <div className="title titleGreathorned">
                        <span>I created kylie cosmetics </span> to give my fans access to the makeup products that i love and use every single day to create my looks. whether i’m getting my makeup done with my glam team for a shoot, or doing my own makeup at home, i love that makeup can make you feel confident and beautiful and i want to share that feeling with you guys.
                    </div>
                </section>

                <section className="cluster clusterGreat">
                    <div className="circle clusterPieces"></div>

                    <div className="owlHorned clusterPieces">
                        <img src="/happy.jpg" alt="Great Horned Owl" />
                        <div className="caption"><span>/01</span> BUY NOW , KYIE COSMETICE</div>
                    </div>

                    <img className="dotsBlue clusterPieces" src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg" alt="Blue Dots" />
                </section>

                <section>
                    <div className="title titleBurrowing">
                        <span>My versatile makeup</span> line features all of my favorite iconic lip kit shades as well as blushes, bronzers, highlighters, high glosses, matte liquid lipsticks, lip blushes, balms, eye essentials, complexion go-tos, and more. everything is clean, vegan, and made with ingredients that are good for your skin, but i made sure we didn’t sacrifice quality, pigmentation, or performance
                    </div>
                </section>

                <section className="cluster clusterBurrowing">
                    <img className="clusterPieces triangle" src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg" alt="Triangle" />

                    <div className="clusterPieces owlBurrowing">
                        <img src="https://i.pinimg.com/1200x/c9/af/83/c9af83a06294d950c2b22a668e0cd4a3.jpg" alt="Burrowing Owl" />
                        <div className="caption captionBurrowing"><span>/02</span> XO, KYLIE 💕</div>
                    </div>

                    <img className="clusterPieces dotsWhite" src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg" alt="White Dots" />
                </section>

                <section>
                    <div className="title titleBurrowing">
                        <span>and the best is yet to come!</span> i’m working on some amazing new launches that i can’t wait to share with you.
                    </div>
                </section>

                <section className="spcr300"></section>
                
                
                <div className="look">
                    <h1>KYLIE'S LOOKS</h1>
                    <h3>we’ve rounded up everything you need to create these iconic looks.</h3>
                </div>


            </div>            
        </>
    )
}

export default AboutFirst
