import './HeroMassage.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroMassage = () => {

    useGSAP(() => {

        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });
        const secMsgSplit = SplitText.create(".second-message", {
            type: "words",
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words, lines",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
            },
        });
        gsap.to(secMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 60%",
            },
        });
        revealTl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            },
        });
        paragraphTl.from(paragraphSplit.words, {
            yPercent: 500,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
        });
    });


    return (
            <div className="message-content">
                <div className="container mx-auto flex-center py-28 relative">
                    <div className="w-full h-full">
                        <div className="msg-wrapper">
                            <h1 className="first-message">I feel like makeup is something that</h1>

                            <div
                                style={{
                                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                                }}
                                className="msg-text-scroll"
                            >
                                <div className="bg-amber-400 md:pb-5 pb-3 px-5">
                                    <h2 className="text-red-brown">makes me</h2>
                                </div>
                            </div>

                            <h1 className="second-message">
                                feel empowered, makes me feel good. behind Kylie Cosmetics
                            </h1>
                        </div>

                        <div className="flex justify-center items-center md:mt-20 mt-10">
                            <div className="max-w-md px-10 flex justify-center items-center overflow-hidden ">
                                <p>
                                    Kylie Cosmetics isn’t just makeup—it’s the ultimate 
                                    allure of confidence, the undeniable power of glam
                                    and completely redefined by Kylie Jenner herself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeroMassage
