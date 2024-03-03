import React from "react";
import "./skills.css";
import { Techstacklist } from "../../utils/Techstacklist";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <>
      <div className="container techstack" id="skills">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Skills
          </h2>
          <hr />
          <p className="pb-3 text-center">
            Including programming languages, frameworks, libraries, databases,
            front-end, back-end, and API'S
          </p>
        </RubberBand>
        <div className="row">
          <Fade left>
            {Techstacklist.map((tech) => (
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Skills;
