import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LuSchool2 } from "react-icons/lu";
import { FaSchoolFlag, FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LuSchool2 />}
          >
            <h3 className="vertical-timeline-element-title">
              JSS English Medium High School Suttur
            </h3>
            <br />
            <h4 className="vertical-timeline-element-subtitle">
              Percentage: 82.88%
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchoolFlag />}
          >
            <h3 className="vertical-timeline-element-title">
              Alva's PU College
            </h3>
            <p>PCMB</p>
            <h4 className="vertical-timeline-element-subtitle">
              Percentage: 77.83%
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2020-2024(currently pursuing 8th semester)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Don Bosco Institute Of Technology
            </h3>
            <p>Information Science and Engineering</p>
            <h4 className="vertical-timeline-element-subtitle">CGPA: 7.35</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
