import { useRef } from 'react';
import { cards } from '../../const'
import './HeroSix.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import gsap from 'gsap';



const HeroSix = () => {
    const vdRef = useRef([]);


    useGSAP(() => {
        gsap.set(".testimonials-section", {
            marginTop: "-230vh",
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
            },
        });

        tl.to(".testimonials-section .first-title", {
            xPercent: 70,
        }
        ).to(".testimonials-section .sec-title", {
            xPercent: 25,
        },
            "<"
        ).to(".testimonials-section .thied-title", {
            xPercent: -50,
        },
            "<"
        )

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
            }
        })
        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut",
        });

    })

    const handlePlay = (index) => {
        const video = vdRef.current[index];
        video.play();
    };

    const handlePause = (index) => {
        const video = vdRef.current[index];
        video.pause();
    };

    return (
        <div className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className='text-black first-title'>what's</h1>
                <h1 className='text-amber-500 sec-title'>everyone</h1>
                <h1 className='text-black third-title'>talking</h1>
            </div>


            <div className="pin-box">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`vd-card ${card.translation} ${card.rotation}`}
                        onMouseEnter={() => handlePlay(index)}
                        onMouseLeave={() => handlePause(index)}
                    >
                        <video
                            ref={(el) => (vdRef.current[index] = el)}
                            src={card.src}
                            playsInline
                            muted
                            loop
                            className="size-full object-cover"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HeroSix
