import './HeroFooter.css'
import { useMediaQuery } from "react-responsive";

const HeroFooter = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });


    return (
        <div id='hero-footer' className="footer-section">
            <img
                src="/images/footer-dip.png"
                alt=""
                className="w-full object-cover -translate-y-1"
                id='hero-img'
            />

            <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
                <div className="overflow-hidden z-10">
                    <h1 className="general-title text-center text-milk py-5">
                        #LOVEFORCOSMIC
                    </h1>
                </div>

                {isMobile ? (
                    <img
                        src="/images/brown-kylie.png"
                        className="absolute top-0 object-contain"
                    />
                ) : (
                    <video
                        src="/video/footer.mp4"
                        autoPlay
                        playsInline
                        muted
                        className="absolute top-0 object-contain mix-blend-lighten"
                    />
                    // <img
                    //     src="/images/brown-kylie.png"
                    //     className="absolute top-0 w-[70rem] h-[70rem] object-contain"
                    // />
                )}

                <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
                    <div className="social-btn">
                        <img src="./images/yt.svg" alt="" />
                    </div>
                    <div className="social-btn">
                        <img src="./images/insta.svg" alt="" />
                    </div>
                    <div className="social-btn">
                        <img src="./images/tiktok.svg" alt="" />
                    </div>
                </div>

                <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
                    <div className="flex items-center md:gap-16 gap-5">
                        <div>
                            <p>KYLIE cosmetics</p>
                        </div>
                        <div>
                            <p>Chug Club</p>
                            <p>Student Marketing</p>
                            <p>Dairy Dealers</p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>Contacts</p>
                            <p>Tasty Talk</p>
                        </div>
                    </div>

                    <div className="md:max-w-lg">
                        <p>
                            Get Exclusive Early Access and Stay Informed About Product
                            Updates, Events, and More!
                        </p>
                        <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full placeholder:font-sans placeholder:text-[#999999] "
                            />
                            {/* <img src="/images/arrow.svg" alt="arrow" className=''/> */}
                        </div>
                    </div>
                </div>

                <div className="copyright-box">
                    
                    <p>Copyright © 2025 kyliecosmetics - All Rights Reserved</p>
                    <div className="flex items-center gap-7">
                        <p>Privacy Policy</p>
                        <p>Terms of Sеrvice</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroFooter
