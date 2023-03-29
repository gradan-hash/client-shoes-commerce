import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";
import airforce1 from "../../img/airforce1.jpg";
import j4red from "../../img/J4red.jpg";
import pumawhite from "../../img/pumawhite.jpg";
import j4bluewhite from "../../img/j4bluewhite.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  // };
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <div className="slider">
      <div className="container">
        <img src={airforce1} alt="" className="img1" />
        <img src={j4red} alt="" className="img2" />
        <img src={j4bluewhite} alt="" className="img3" />
      </div>
      {/* <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
