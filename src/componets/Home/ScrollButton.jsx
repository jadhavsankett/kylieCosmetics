import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ScrollButton = () => {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when footer is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const footerEl = document.querySelector("#hero-footer");
    if (footerEl) observer.observe(footerEl);

    return () => {
      if (footerEl) observer.unobserve(footerEl);
    };
  }, []);

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition duration-300 shadow-xl"
      >
        Explore About
        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default ScrollButton;
