import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import { toast } from "react-toastify";
import Tada from "react-reveal/Tada";
import "react-toastify/dist/ReactToastify.css";
import LightSpeed from "react-reveal/LightSpeed";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.warning("Please provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      // validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LightSpeed left>
        <div className="contact" id="contact">
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src="https://img.freepik.com/premium-photo/man-touching-contact-symbols-internet-communication_220873-3864.jpg"
                      alt="contact"
                      className="images"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h4>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/shivu-kumara-001598272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="blank"
                        >
                          <FaLinkedin
                            color="blue"
                            size={30}
                            className="ms-4 icons1"
                          />
                        </a>
                        <a href="https://github.com/SHIVUKUMARA" target="blank">
                          <FaGithub
                            color="black"
                            size={30}
                            className="ms-4 icons1"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/shivakumara.patil.940?mibextid=ZbWKwL"
                          target="blank"
                        >
                          <FaFacebook
                            color="blue"
                            size={30}
                            className="ms-4 icons1"
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/shivukumara_patil/?igshid=MzMyNGUyNmU2YQ%3D%3D"
                          target="blank"
                        >
                          <FaInstagram
                            color="brown"
                            size={30}
                            className="ms-4 icons1"
                          />
                        </a>
                      </h4>
                    </div>
                    <div className="row px-3 mb-4 lines">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Enter your Message"
                        rows={4}
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button
                        className="button"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LightSpeed>
      <div className="footer pb-3 ms-3">
        <Tada>
          <h4 className="text-center">Made By SHIVUKUMARA @ 2024</h4>
        </Tada>
      </div>
    </>
  );
};

export default Contact;
