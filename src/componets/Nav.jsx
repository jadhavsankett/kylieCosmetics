import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"; 

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="middle-logo">
        <h1>KYLIE COSMETICS</h1>
        <h4>KYLIE JENNER</h4>
      </div>
      <div className="navigater">
        <NavLink to={"/"} className="text">Home</NavLink>
        <NavLink to={"/products"} className="text">Products</NavLink>
        <NavLink to={"/about"} className="text">About</NavLink>
        <NavLink to={"/login"}>
          <i className="fa-regular fa-user"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav
