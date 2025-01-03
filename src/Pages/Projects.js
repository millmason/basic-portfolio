import React from "react";
import { Project } from "../components/Project";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const PROJECTS = [
    {
      projectName: "wavy",
      shortCopy: "audio visualizer",
      copy: "an audio visualizer using the HTML5 audio API",
      codeUrl: "https://github.com/millmason/wavy",
      liveUrl: "http://millmason.github.io/wavy",
    },
    {
      projectName: "lines",
      shortCopy: "animating svgs",
      copy: "animating randomized SVG paths without greensock",
      codeUrl: "https://github.com/millmason/svg-path-animation",
      liveUrl: "http://millmason.github.io/svg-path-animation",
    },
    {
      projectName: "mouse trap",
      shortCopy: "cursor fun",
      copy: "experiments with cursor tracking",
      codeUrl: "https://glitch.com/edit/#!/mouse-trap",
      liveUrl: "https://mouse-trap.glitch.me",
    },
    {
      projectName: "star chart",
      shortCopy: "it's a chart!",
      copy: "an interactive star chart built with styled components and react hooks",
      codeUrl: "https://glitch.com/edit/#!/star-chart",
      liveUrl: "https://star-chart.glitch.me",
    },
    {
      projectName: "roman holiday",
      shortCopy: "daily roman holidays",
      copy: "find the next ancient roman holiday via a node and express app",
      codeUrl: "https://glitch.com/edit/#!/roman-holiday",
      liveUrl: "https://roman-holiday.glitch.me",
    },
  ];
  return (
    <div className="project-container">
      <div
        className="project project-header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Link to="/" className="back button">{`< home `}</Link>
        <h2>Projects</h2>
      </div>
      {PROJECTS.map((project) => {
        return (
          <Project
            key={project.projectName}
            projectName={project.projectName}
            shortCopy={project.shortCopy}
            copy={project.copy}
            codeUrl={project.codeUrl}
            liveUrl={project.liveUrl}
          />
        );
      })}
    </div>
  );
};

export default Projects;
