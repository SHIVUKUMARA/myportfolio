import React from "react";
import "./certification.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaCertificateSolid } from "react-icons/lia";

const Certification = () => {
  return (
    <>
      <div className="container education cer" id="certification">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Courses & Certification
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="05-05-2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LiaCertificateSolid />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">By Udemy</h4>
            <br />
            <a
              className="ad-btn2 text-center"
              href="https://www.udemy.com/certificate/UC-77025406-2261-469d-88b1-0eec108f85de/"
              target="blank"
            >
              Certificate
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="03-08-2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LiaCertificateSolid />}
          >
            <h3 className="vertical-timeline-element-title">
              Python Programming
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              By Infosys SpringBoard
            </h4>
            <br />
            <a
              className="ad-btn2 text-center"
              href="https://drive.google.com/file/d/1GmucjvjuAdVKGqZKklYy37JZb_Le1dYh/view?usp=drivesdk"
              target="blank"
            >
              Certificate
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="19-01-2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LiaCertificateSolid />}
          >
            <h3 className="vertical-timeline-element-title">SQL</h3>
            <h4 className="vertical-timeline-element-subtitle">By IBM</h4>
            <br />
            <a
              className="ad-btn2 text-center"
              href="https://courses.cognitiveclass.ai/certificates/208f24d85cfb47aabc278f09c6bb19fd"
              target="blank"
            >
              Certificate
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="29-08-2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LiaCertificateSolid />}
          >
            <h3 className="vertical-timeline-element-title">Microsoft Excel</h3>
            <h4 className="vertical-timeline-element-subtitle">
              By Great Learning
            </h4>
            <br />
            <a
              className="ad-btn2 text-center"
              href="https://drive.google.com/file/d/1U1t6UqctZPkcqSu4pbOdH5jEpnGTmobo/view?usp=sharing"
              target="blank"
            >
              Certificate
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F0ECE5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="07-12-2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LiaCertificateSolid />}
          >
            <h3 className="vertical-timeline-element-title">Git & GitHub</h3>
            <h4 className="vertical-timeline-element-subtitle">
              By Infosys Spring Board
            </h4>
            <br />
            <a
              className="ad-btn2 text-center"
              href="https://drive.google.com/file/d/1k3EPF3e2ZfUaN7wgInbMlyI5LzvxrFTc/view?usp=drive_link"
            >
              Certificate
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Certification;
