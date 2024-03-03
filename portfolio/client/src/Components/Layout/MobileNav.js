import React, {useState} from 'react';
import { CgMenuGridO } from "react-icons/cg";
import "./mobilenav.css";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcCommandLine,
  FcReading,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import { BiMenuAltLeft } from "react-icons/bi";
import { PiCertificateThin } from "react-icons/pi";
import { Link } from "react-scroll";


const MobileNav = () => {

    const [open, setOpen] = useState(false);
    
    // handle open 
    const handleOpen = () => {
        setOpen(!open);
    };

    // handle menu click
    const handleMenuClick = () => {
        setOpen(false);
    };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <BiMenuAltLeft
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <CgMenuGridO
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcContacts size={25} title="Contact" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav;
