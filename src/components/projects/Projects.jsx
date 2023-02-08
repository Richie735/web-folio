import React from "react";
import { FiGithub } from "react-icons/fi";
import "./projects.css";

const projects = [
  {
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio4.jpg"),
  },
  {
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio3.jpg"),
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio2.jpg"),
  },
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, amet odit tenetur obcaecati distinctio veniam suscipit dignissimos culpa natus assumenda ratione, maiores nam voluptates itaque? Maiores voluptates delectus repellat!",
    tecs: [
      { tittle: "React", id: 0 },
      { tittle: "Html", id: 1 },
      { tittle: "Css", id: 2 },
    ],
    links: "https://github.com/Richie735",
    image: require("../../assets/portfolio1.jpg"),
  },
];

const projectContent = projects.map((project, i) => (
  <div count1={i} count2={i + 1}>
    {i % 2 === 0 ? (
      <div className="project-container-even">
        <div className="project-img-cont">
          <img src={project.image} alt="" className="project-img" />
        </div>
        <div className="project-text">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="project-list">
            {project.tecs.map((tech, i) => (
              <li key={i}>{tech.tittle}</li>
            ))}
          </ul>
          <a href={project.links} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </div>
      </div>
    ) : (
      <div className="project-container-odd">
        <div className="project-text">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="project-list">
            {project.tecs.map((tech, i) => (
              <li key={i}>{tech.tittle}</li>
            ))}
          </ul>
          <a href={project.links} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </div>
        <div className="project-img-cont">
          <img src={project.image} alt="" className="project-img" />
        </div>
      </div>
    )}
  </div>
));

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="numbered-heading-even">
        <span>04.</span>Projects
      </h2>
      <div className="projects-grid">{projectContent}</div>
    </section>
  );
}

export default Projects;
