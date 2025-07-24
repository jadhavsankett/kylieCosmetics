import { useGSAP } from '@gsap/react'
import './AboutSecond.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const AboutSecond = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.imp-div',
                start: 'top 50%',
                end: '+=3400',
                scrub: 2,
            }
        })
        tl.from('.elem.line1.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime1'
        ).from('.elem.line1.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime1'
        )
        
        tl.from('.elem.line2.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime2'
        )
        tl.from('.elem.line2.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime2'
        )


         tl.from('.elem.line3.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime3'
        )
        tl.from('.elem.line3.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime3'
        )

         tl.from('.elem.line4.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime4'
        )
        tl.from('.elem.line4.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime4'
        )

         tl.from('.elem.line5.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime5'
        )
        tl.from('.elem.line5.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime5'
        )

         tl.from('.elem.line6.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime6'
        )
        tl.from('.elem.line6.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime6'
        )

         tl.from('.elem.line7.left', {
            x: -300,
            opacity: 0,
            duration: 1
        }, 'anime7'
        )
        tl.from('.elem.line7.right', {
            x: 300,
            opacity: 0,
            duration: 1
        }, 'anime7'
        )
    })

    return (
        <div className="imp-div">
            <div className="first">

                <div className="elem line1 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_2025_April_Kylie_s-Look_2500x2500_1x1_993279bf-729c-49b8-8d2b-d9fcafa69951.jpg?crop=center&height=720&v=1749673111&width=720" alt="" />
                    <h1>
                        Signature Glam Look
                    </h1>
                    <button>shop now</button>
                </div>

                <div className="elem line1 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_Kylie_s-Look_LBE_1x1_ratio_a6ec133b-ae67-49ef-9bef-2df2960547a2.jpg?crop=center&height=720&v=1741627092&width=720" alt="" />
                    <h1>Lip Butter Campaign Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line2 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_2025_Jan-Kylie_s-Look_2500x2500_1x1_1.jpg?crop=center&height=720&v=1738279695&width=720" alt="" />
                    <h1>Soft Sultry Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line2 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v2_2025_Jan-Kylie_s-Look_2500x2500_1x1_2419e419-a18d-4823-a68a-b0db0bb6f06f.jpg?crop=center&height=720&v=1737505376&width=720" alt="" />
                    <h1>Golden Globes Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line3 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_2025_Jan-Kylie_s-Look_2500x2500_1x1_abeb58f1-4b52-4728-b692-4e4423a17151.jpg?crop=center&height=720&v=1737144851&width=720" alt="" />
                    <h1>Powder Foundation Campaign Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line3 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_Kylies-Full-Face-Look_2500x2500_1125.jpg?crop=center&height=720&v=1732557753&width=720" alt="" />
                    <h1>Full Face Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line4 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_Kylies-Finishing-Touches-Look_2500x2500_e660bb90-4139-47b4-ae32-21f1a6c87ac9.jpg?crop=center&height=720&v=1731450296&width=720" alt="" />
                    <h1>Finishing Touches Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line4 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v2_Kylie_s-CDFA-Look_2500x2500_7be2b08c-4841-4fa1-b6d1-e9365b63ccd6.jpg?crop=center&height=720&v=1730239349&width=720" alt="" />
                    <h1>CDFA Awards  Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line5 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v1_Kylie_s-BOF-Look_2500x2500_147f1e3b-ec21-4916-ba8e-e81d5fe1d2bd.jpg?crop=center&height=720&v=1727733943&width=720" alt="" />
                    <h1>BOF Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line5 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/v2_Kylie_s_Schiaparelli_Makeup_Look_730x730_ratio.jpg?crop=center&height=720&v=1727453926&width=720" alt="" />
                    <h1>Schiaparelli Makeup Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line6 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/0507_Met-Gala-Look_2500x2500_1.jpg?crop=center&height=720&v=1715057321&width=720" alt="" />
                    <h1>met gala 2024 Look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line6 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/kylie_s_vacay-glam_look-_2500x2500_271b78d8-e0b7-4927-bf7f-199304b9933e.jpg?crop=center&height=720&v=1713565375&width=720" alt="" />
                    <h1>VACAY LOOK</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line7 left">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/kylie_paris_look_740x545_ratio_1_1.jpg?crop=center&height=720&v=1707501854&width=720" alt="" />
                    <h1>paris fashion week look</h1>
                    <button>shop now</button>
                </div>

                <div className="elem line7 right">
                    <img src="https://kyliecosmetics.com/cdn/shop/files/344124460_201375876012289_4851206557529894835_n-sq_098abed9-8228-46ee-b46b-c00bf1a4aa40.jpg?crop=center&height=720&v=1683046147&width=720" alt="" />
                    <h1>MET GALE LOOK</h1>
                    <button>shop now</button>
                </div>

                <h2>AND More..</h2>
            </div>

        </div>
    )
}

export default AboutSecond
