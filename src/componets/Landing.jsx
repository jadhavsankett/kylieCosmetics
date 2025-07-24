import { useEffect } from 'react';
import '../componets/Landing.css';
import gsap from 'gsap';

const Landing = () => {

    useEffect(() => {

        gsap.from(('.land-span span'), {
            y: 100,
            duration: 0.8,
            opacity: 0,
            stagger: 0.15,
            delay: 0.5,
        })

        gsap.from(('.land-b h2'), {
            y: 50,
            duration: 0.8,
            opacity: 0,
            delay: 1.5,
        })

        gsap.from(('.land-b p span'), {
            y: 100,
            duration: 0.8,
            stagger: 0.15,
            opacity: 0,
            delay: 2,
        })

        gsap.from(('.land-c img'), {
            y: 50,
            duration: 0.8,
            opacity: 0,
            delay: 2.5,
        })

        // window.addEventListener('wheel', function(dets){
        //     if(dets.deltaY>0){
        //        console.log('scrolling down')
        //     }else{
        //         console.log('scrooling down')
        //     }

        // })


    }, [])

    return (
        <div className="landing-page">
            <div className="land-a">
                <div className="circle"></div>
                <div className="squre"></div>
                <div className="land-b">
                    <div className='land-span'>
                        <span className='span1'>P</span>
                        <span className='span2'>E</span>
                        <span className='span3'>A</span>
                        <span className='span4'>C</span>
                        <span className='span5'>H </span>
                        <span className='span6'>M</span>
                        <span className='span7'>A</span>
                        <span className='span8'>N</span>
                        <span className='span9'>G</span>
                        <span className='span10'>O</span>
                    </div>
                    <h2>LIP BUTTER</h2>
                    <p>
                        <span>juicy, buttery & hydrating – get</span><br />
                        <span>our award-winning lip butter</span><br />
                        <span>in a new peach mango</span><br />
                        <span>scent & shade.</span><br />
                    </p>

                    <div className="land-c">
                        <img
                            src="/remove-bg.png"
                            alt="Lip Butter"
                            className="main-image"
                        />
                    </div>


                    {/* Floating flower svg */}
                    <div className="flower-svg">
                        <svg width="80" height="80" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="20" fill="#FFC0CB" />
                            <circle cx="30" cy="30" r="10" fill="#FF69B4" />
                            <circle cx="70" cy="30" r="10" fill="#FF69B4" />
                            <circle cx="30" cy="70" r="10" fill="#FF69B4" />
                            <circle cx="70" cy="70" r="10" fill="#FF69B4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
