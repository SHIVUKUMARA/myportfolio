import React from "react";
import "./menus.css";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcCommandLine,
  FcReading,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import { PiCertificateThin } from "react-icons/pi";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import profile from "../../assets/profile.png";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src={profile}
                alt="profile pic"
              />
            </div>
          </Zoom>
          <Slide left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome size={25} title="Home" />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout size={25} title="About" />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading size={25} title="Education" />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcCommandLine size={25} title="Skills" />
                    Skills
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="certification"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <PiCertificateThin size={25} title="Certification" />
                    Certification
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector size={25} title="Projects" />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="internship"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode size={25} title="Internship" />
                    Internship
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts size={25} title="Contact" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        </>
      ) : (
        <Slide left>
          <div className="icons">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome size={30} title="Home" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout size={30} title="About" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReading size={30} title="Education" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcCommandLine size={30} title="Skills" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="certification"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <PiCertificateThin size={30} title="Certification" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector size={30} title="Projects" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="internship"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode size={30} title="Internship" />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcContacts size={30} title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </Slide>
      )}
    </>
  );
};

export default Menus;
