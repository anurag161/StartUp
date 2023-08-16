import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material";
import Anurag from "../../../images/Anurag.jpg";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={Anurag}
              alt="Founder"
            />
            <Typography component="h3" className="naam">
              Anurag Kumar Bharti
            </Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
          </div>
          <div className="aboutSectionContainer2">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography component="h3" className="naam">
              Arpit Arya
            </Typography>
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button> */}
          </div>
        </div>
        <Typography component="h3">
          '' The groundbreaking IITIAN Vibes online retail platform was created
          by Anurag Kumar Bharti and Arpit Arya. With a mutual love for their
          alma institution, IIT Jodhpur, and a vision to usher in a new age of
          retail purchasing on campus, these two ambitious people launched the
          firm. The dearth of convenient options for purchasing institute stuff
          and the absence of fashionable designs that adequately expressed the
          spirit of their college community were things that particularly stood
          out to Anurag and Arpit. Motivated to meet this need, they set out to
          provide a comprehensive resource for everyone interested in IIT
          Jodhpur. As a symbol of their persistent dedication to provide their
          beloved institute the high-quality, stylish, and unique goods it
          deserves, today's IITIAN Vibes rises tall. ''
        </Typography>
      </div>
    </div>
  );
};

export default About;
