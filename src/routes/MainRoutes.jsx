import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import About from "../pages/About"
import Products from "../pages/Products"
import ScrollToTop from "../componets/Home/ScrollToTop"

const MainRoutes = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes
