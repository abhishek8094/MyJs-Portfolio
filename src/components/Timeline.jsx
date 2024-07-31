import { FaGoogleScholar } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import schLogo from "/edu/schLogo.jpg";
import rmlau from "/edu/rmlau.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Time = () => {
  return (
    <div className="px-4">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#31304D", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date=" 2020 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaGoogleScholar />}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img
              className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 object-contain"
              src={rmlau}
              alt="rmlau Ayodhya"
            />
            <div className=" sm:text-left">
              <h3 className="vertical-timeline-element-title">
                Dr. Ram Manohar Lohia Avadh University, Ayodhya
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Btech CSE (Graduation)
              </h4>
              <p>Current CGPA:- 7.2</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#31304D", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img
              className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 object-contain"
              src={schLogo}
              alt="SkksIc"
            />
            <div className=" sm:text-left">
              <h3 className="vertical-timeline-element-title">
               Shri krishna Shikshana Sansthan Intermediate College
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bhaluani Deoria
              </h4>
              <p>Percentage:- 82%</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#31304D", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img
              className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 object-contain "
              src={schLogo}
              alt="SkssIC"
            />
            <div className=" sm:text-left">
              <h3 className="vertical-timeline-element-title">
              Shri krishna Shikshana Sansthan Intermediate College
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Bhaluani, Deoria
              </h4>
              <p>Percentage:- 89%</p>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Time;
