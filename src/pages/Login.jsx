import { Link} from "react-router-dom"
import './Login.css'

const Login = () => {

    return (
        <div className="login-container">       
            <div className="login-left">
                   <div id="gooey"></div> 
                <h2 className="welcome-text">Welcome back<span>!</span></h2>
                <p className="sub-text">The faster you fill up, the faster you get a ticket</p>

                <form 
                className="login-form">
                    <label>Email</label>
                    <input 
                    type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input 
                    type="password" placeholder="********" />

                    <div className="form-options">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div>

                    <button className="signin-btn">Sign In</button>
                    <button className="google-btn">
                        <i className="ri-google-fill"></i>
                        Sign In with Google
                    </button>

                    <p className="signup-text">Don’t have an account? <Link className="text-blue-400" to="/register">Register</Link></p>
                </form>
            </div>


            <div className="login-right" onMouseEnter={() => document.querySelector('.hover-img')?.play()} onMouseLeave={() => document.querySelector('.hover-img')?.pause()}>
                <img
                    src="/log-2.jpg"
                    alt="login cover"
                />
                <video
                    className="hover-img"
                    src="https://kyliecosmetics.com/cdn/shop/videos/c/vp/3e77cc97002d498392970c28bc8c01f9/3e77cc97002d498392970c28bc8c01f9.HD-1080p-7.2Mbps-50852224.mp4?v=0"
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
                <div className="info">
                    <h2>Karina 카리나</h2>
                    <p>Aespa (에스파)는 대한민국의 SM 엔터테인먼트 소속 4인조 다국적 걸그룹이다. SMCU 프로젝트의 첫 주자로 나서게 되며</p>
                </div>
                <div className="aespa">lip butter</div>
            </div>
        </div>
    )
}

export default Login
