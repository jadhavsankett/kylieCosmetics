import { Link} from "react-router-dom"
import '../pages/login.css'

const Register = () => {

  return (
    <div className="login-container">

        <div className="login-right" onMouseEnter={() => document.querySelector('.hover-img')?.play()} onMouseLeave={() => document.querySelector('.hover-img')?.pause()}>
        <img
          src="https://kyliecosmetics.com/cdn/shop/files/KJC_LIP_25_Lip-Butters_Group_01_CP_1284_Hero_WS.jpg?crop=center&height=720&v=1751914132&width=720"
          alt="login cover"
        />
       
        <video
          className="hover-img"
          src="https://cdn.shopify.com/videos/c/o/v/8b6935dbeb17457fa399582ca20bb0d5.mp4"
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

      <div className="login-left">
        <div id="gooey"></div>
        <h2 className="welcome-text">Create account<span>!</span></h2>
        <form
          className="login-form">
          <label>Full Name</label>
          <input 
          type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input 
          type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input 
          type="password" placeholder="Create a password" />

          <label>Confirm Password</label>
          <input 
          type="password" placeholder="Re-enter your password" />

          <button className="signin-btn">Register</button>
          <button className="google-btn">
            <i className="ri-google-fill"></i>
            Sign In with Google
          </button>

          <p className="signup-text">Already have an account? <Link className="text-blue-400" to="/login">Sing Up</Link></p>
        </form>
      </div>


    </div>
  )
}

export default Register
