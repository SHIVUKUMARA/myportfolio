import React from "react";
import "./internship.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa6";

const Internship = () => {
  return (
    <>
      <div className="work" id="internship">
        <div className="work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Internship
          </h2>
          <hr />
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="11-08-2023 to 11-09-2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Prinston Smart Engineers
              </h3>
              <br />
              <h4 className="vertical-timeline-element-subtitle">
                Full Stack Web Developoment
              </h4>
              <br />
              <a
                className="ad-btn1 text-center"
                href="https://drive.google.com/file/d/1GfNmiuPXiLilG02DoI3jnWsVOOXFo8N9/view?usp=sharing"
              >
                Certificate
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  grey" }}
              date="16-08-2023 to 16-10-2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Emertex Web Stack Academy
              </h3>
              <br />
              <h4 className="vertical-timeline-element-subtitle">
                MERN Stack Web Development
              </h4>
              <br />
              <a
                className="ad-btn1 text-center"
                href="https://drive.google.com/file/d/1RBNTFu6_adcnBLQA-ddiSvrXFmDqstyK/view?usp=sharing"
                target="blank"
              >
                Certificate
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Internship;
