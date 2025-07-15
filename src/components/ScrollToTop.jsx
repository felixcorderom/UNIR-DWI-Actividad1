import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTop.scss";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Mostrar el botón solo si el usuario scrollea
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollAlInicio = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button className="scroll-to-top" onClick={scrollAlInicio}>
      <FaArrowUp />
    </button>
  ) : null;
}

export default ScrollToTop;
