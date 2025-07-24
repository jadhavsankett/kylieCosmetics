import './HeroThree.css'

const HeroThree = () => {
    return (
        <>
<div className="main-container">
            <div className="container">
                <section className="section section--apple">
                    <div className="section--apple__apple">
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                        <img className="apple-image apple-image--complete" src="./ky-lip.png" />
                    </div>
                    <h1 className="text">Lip Butter?</h1>
                </section>

                <section className="section section--intro">
                    <article className="section__content">
                        <h2 className="text">It's super</h2>
                        <h1 className="text">Hydrating and</h1>
                        <h1 className="text">Perfect for everyday</h1>
                        <h2 className="text">lips in silky moisture for up to 24 hours</h2>
                        <div className="blurb">
                            <p>and visibly improves the look of lip lines!".</p>
                        </div>
                    </article>
                </section>

                <section className="section section--dance">
                    <article className="section__content"></article>
                </section>

                <section className="section section--clipper">
                    <article className="section__content">
                        <video muted="muted" loop="loop" autoPlay="autoplay" src="./lipbutter.mp4"></video>
                        <svg className="apple-video" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <mask id="image-mask">
                                    <g className="logo">
                                        <rect fill="white" height="100%" width="100%"></rect>
                                        <path fill="black" d="M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z"></path>
                                    </g>
                                </mask>
                            </defs>
                            <rect className="backdrop" fill="white" height="100%" width="100%"></rect>
                            <rect mask="url(#image-mask)" fill="black" height="100%" width="100%"></rect>
                        </svg>
                        <h1 className="text">hydration + shine</h1>
                    </article>
                </section>

                <section className="section section--outro">
                    <article className="section__content">
                        <div className="section__apples">
                            <img className="apple-image apple-image--gobble" src="./ky-lip.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-pink.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-brown.png" />
                            <img className="apple-image apple-image--gobble" src="./ky-lip.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-pink.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-brown.png" />
                            <img className="apple-image apple-image--gobble" src="./ky-lip.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-pink.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-brown.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-pink.png" />
                            <img className="apple-image apple-image--gobble" src="./lip-brown.png" />

                        </div>
                        <div className="section__outro">
                            <h1 className="text"><span> maintains </span><span>the skin </span><span>barrier</span><span>.</span></h1>
                        </div>
                    </article>
                </section>
                
            </div>
</div>
        </>
    )
}

export default HeroThree
