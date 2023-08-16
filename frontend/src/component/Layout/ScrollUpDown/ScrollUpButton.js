import React, { useState, useEffect } from "react";
import "./ScrollUpButton.css"; // Assuming you have a CSS file named ScrollUpButton.css

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-up-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default ScrollUpButton;
