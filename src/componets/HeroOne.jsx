import { useGSAP } from '@gsap/react';
import './HeroOne.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const HeroOne = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".heading",
                start: "-200% top",
                end: "150% top",
                scrub: 1.5,

            },
        });
        tl.from(".heading h1", {
            y: 10,
            opacity: 0,
            duration: 1.5,
            stagger: 1,
        }, '0'
        ).from(".heading p", {
            y: 10,
            opacity: 0,
            duration: 1.5,
            stagger: 1
        }).to('.leaf', {
            yPercent: 20,
            duration: 3,
        }
        )
            .from('.heading h2', {
                xPercent: 20,
                opacity: 0,
                duration: 1.5,
            }, '0'
            )

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: "-10% top",
                end: "90% top",
                scrub: 1.5,
                // markers: true,
            }
        });

        tl2.to('.card-layout .card-top-left', {
            yPercent: 20
        }, 0) // Start all at same time (time = 0)
            .from('.card-layout .card-top-right', {
                yPercent: 20
            }, 0)
            .to('.card-layout .card-bottom-left', {
                yPercent: 20
            }, 0)
            .from('.card-layout .card-bottom-right', {
                yPercent: 20
            }, 0)
            .to(".ring2", {
                yPercent: 20
            })
            .from('.svg-mask-image .masking', {
                xPercent: 5,
            }, 0)


        gsap.to('.hero', {
            backgroundColor: '#F0E2D7',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                // markers: true 
            },
            ease: 'none'
        });


    });

    return (
        <>
            <div className="hero">
                <div className="heading">
                    <h1> CLEAN, CONSCIOUS,     </h1>
                    <h1>   PERFORMANCE </h1>

                    <p>
                        Unreservedly honest products that truly work, <br />
                        be kind to Lip and the planet – no exceptions!
                    </p>
                    <h2>Lipcare</h2>

                    <img src="./leaf.png" alt="" className='leaf' />
                </div>

                <div className="svg-mask-image">
                    <img src="/kylie10.jpg" alt="Skincare" className='masking' />
                </div>

                <div className="card-layout">

                    <div className="card card-top-left">
                        <img src="./icon-clean-beyond-reproach.svg" alt="" />
                        <h3>Clean, Beyond <br />
                            Reproach</h3>
                        <p>
                            Truly clean with only verified <br />
                            ingredients; and free from over <br />
                            1800 questionable ingredients. <br />
                            Because what you put on your skin matters. <br />
                        </p>
                    </div>

                    <div className="card card-top-right">
                        <img src="./icon-radical-transparency.svg" alt="" />
                        <h3>Radical <br />
                            Transparency</h3>
                        <p>
                            No black boxes, nothing to hide, <br />
                            we disclose our full formulas, <br />
                            so you will never have to guess <br />
                            what's in it and how much. <br />
                        </p>
                    </div>

                    <div className="card card-bottom-left">
                        <img src="./icon-potent-multi-tasking.svg" alt="" />
                        <h3>Potent & Multi <br />
                            Tasking</h3>
                        <p>
                            Our formulas are chock-a <br />
                            -block with actives, anti oxidants,<br />
                            skin restoring agents backed by <br />
                            dermal science that aim to deliver real results. <br />
                        </p>
                    </div>

                    <div className="card card-bottom-right">
                        <img src="./icon-conscious-responsible.svg" alt="" />
                        <h3>Conscious & <br />
                            Responsible</h3>
                        <p>
                            Peta Certified Vegan and <br />
                            Cruelty Free. Our products are <br />
                            always housed in responsible <br />
                            packaging and made sustainably.
                        </p>
                    </div>

                    <div className="spring">
                        <img src="./empress.png" alt="" className='ring2' />
                    </div>

                </div>
            </div>

        </>
    )
}

export default HeroOne


