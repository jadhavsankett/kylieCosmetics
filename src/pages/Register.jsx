import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { Link, useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import { asyncregisteruser } from "../store/actions/UserAction"
import '../pages/login.css'

const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Registerhandler = (user) => {
    user.id = nanoid()
    console.log(user)
    dispatch(asyncregisteruser(user))
    navigate("/login")
  }

  return (
    <div className="login-container">

        <div className="login-right" onMouseEnter={() => document.querySelector('.hover-img')?.play()} onMouseLeave={() => document.querySelector('.hover-img')?.pause()}>
        <img
          src="https://kyliecosmetics.com/cdn/shop/files/KJC_LIP_25_Lip-Butters_Group_01_CP_1284_Hero_WS.jpg?crop=center&height=720&v=1751914132&width=720"
          alt="login cover"
        />
        {/* <img className="hover-img" src="https://scontent.cdninstagram.com/v/t51.82787-15/514598446_18474226552072786_5103876841886419903_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=watyryZuhwIQ7kNvwExijiA&_nc_oc=AdlHi_SJjd7yVzkLiEjcHJyQFQtPrjEX20cQKR40DkXCZz6JYAt-rzlRr4Q1hImwTZQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=0nTDAraRchgNR2x952GPkw&oh=00_AfT9HrUWHGWuE5dDlwcxerpdj1KtschPqIVYpUvZJ4PUjg&oe=687DEFAD" alt="Hover Cover" /> */}
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
          onSubmit={handleSubmit(Registerhandler)}
          className="login-form">
          <label>Full Name</label>
          <input 
          {...register("name")}
          type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input 
          {...register("email")}
          type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input 
          {...register("pass")}
          type="password" placeholder="Create a password" />

          <label>Confirm Password</label>
          <input 
          {...register("c-pass")}
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
