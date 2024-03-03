import React from "react";
import "./about.css";
import LightSpeed from "react-reveal/LightSpeed";
import profile from "../../assets/profile.png";

const About = () => {
  return (
    <LightSpeed right>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} alt="profile-pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              "I am a passionate full-stack web developer and skilled Python
              programmer, dedicated to crafting seamless and engaging digital
              experiences. With a strong foundation in both front-end and
              back-end technologies, I bring creativity and functionality to
              every project. My expertise includes building robust and scalable
              web applications, implementing responsive design, and optimizing
              for performance. Proficient in various web development frameworks
              and libraries, I leverage my versatile skill set to create dynamic
              and efficient solutions. Committed to staying ahead in the
              ever-evolving tech landscape, I thrive in collaborative
              environments, solving problems with innovative solutions. Through
              my journey, I've cultivated a love for clean code, user-centric
              design, and continuous learning. Transform ideas into reality, one
              line of code at a time."
            </p>
          </div>
        </div>
      </div>
    </LightSpeed>
  );
};

export default About;
