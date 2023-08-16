import React, { useEffect, useState } from "react";
import "./ProductCard.css";

const ProductCard = () => {
  const ad1 =
    "https://drive.google.com/file/d/1wK6NlXwsM1Z9oT8BJUduokfv9ocOWeMG/view?usp=drive_link";
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
      }

      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);

      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
    };

    const slideshowInterval = setInterval(showSlides, 2000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext"></div>
          <img
            src="https://drive.google.com/uc?export=view&id=1wK6NlXwsM1Z9oT8BJUduokfv9ocOWeMG"
            alt="ad1"
            style={{ width: "1627px" }}
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext"></div>
          <img
            src="https://drive.google.com/uc?export=view&id=10mQOKCAj6lTLRJ3f8W3llHG9scdD9DqU"
            alt="ad2"
            style={{ width: "1627px" }}
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext"></div>
          <img
            src="https://drive.google.com/uc?export=view&id=1qBvZLrC2QPVdnXQcvbUmKkRVN-1_CxoV"
            alt="ad3"
            style={{ width: "1627px" }}
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext"></div>
          <img
            src="https://drive.google.com/uc?export=view&id=1uLNMLGWBF8TpHzNwZM_VMkc5zRMZuj0P"
            alt="ad4"
            style={{ width: "1627px" }}
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext"></div>
          <img
            src="https://drive.google.com/uc?export=view&id=1DUjOsNI0HFRTsXg4lH-TiYAS86Uj9M9O"
            alt="ad5"
            style={{ width: "1627px" }}
          />
          <div className="text"></div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default ProductCard;
