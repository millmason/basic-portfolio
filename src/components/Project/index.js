import React, { useState } from "react";
import {
  Cheese,
  OliveBranchLeft,
  OliveBranchRight,
  StarMap,
  Radio,
} from "../../images";
import { Lines } from "../Lines";

export const Project = ({ projectName, shortCopy, copy, codeUrl, liveUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const images = {
    wavy: <Radio />,
    mousetrap: <Cheese />,
    starchart: <StarMap />,
    lines: <Lines strokeColor="black" />,
  };

  const trimmedName = projectName.replace(" ", "");

  return (
    <div
      aria-expanded={isOpen}
      className={`project ${trimmedName} ${isOpen ? "open" : ""}`}
      tabIndex={0}
      onKeyDown={(event) => {
        console.log("EVENT: ", event.key);
        if (event.key === "Enter") {
          setIsOpen(!isOpen);
        }
      }}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="project-image" id={trimmedName}>
        {trimmedName !== "romanholiday" ? (
          images[trimmedName]
        ) : (
          <div className="branch-container svg">
            <OliveBranchLeft />
            <OliveBranchRight />
          </div>
        )}
        <div className="sub-title">
          <span className="project-name">{`${projectName}:`}</span>
          {` ${shortCopy}`}
        </div>
      </div>
      <div className="project-text-box">
        <p>
          <span className="project-name">{projectName}</span>
          {` ${copy}`}
        </p>
        <div className="link-container">
          <a className="button" href={liveUrl}>
            live
          </a>
          <a className="button" href={codeUrl}>
            code
          </a>
        </div>
      </div>
    </div>
  );
};
