import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import UTADSummit from "../../assets/UTADSummit.jpeg";
import "./projects.css";

function Projects() {
   return (
      <section className="projects" id="projects">
         <h2 className="numbered-heading-even">
            <span>04.</span>Projects
         </h2>
         <div className="projects-grid">
            {/* UTAD Summit  */}
            <div className="project-container-even">
               <div className="project-img-cont">
                  <img src={UTADSummit} alt="" className="project-img" />
               </div>
               <div className="project-text">
                  <h3>UTAD Summit</h3>
                  <p>
                     I acted as one of the organizers of the event, which
                     involved the participation of over 10 companies, with the
                     purpose of promoting networking and improving the
                     pedagogical skills of the students.
                  </p>
                  <ul className="project-list">
                     <li>Organization</li>
                  </ul>
                  <ul>
                     <a
                        className="project-links"
                        href="https://www.instagram.com/utadsummit/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <FiInstagram />
                     </a>
                     <a
                        className="project-links"
                        href="https://www.linkedin.com/in/utadsummit/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <FiLinkedin />
                     </a>
                  </ul>
               </div>
            </div>

            {/* Flutter GPT */}
            <div className="project-container-odd">
               <div className="project-text">
                  <h3>Flutter GPT</h3>
                  <p>
                     A mobile application that uses the OpenAi API to generate
                     text-to-text and text-to-image content. Developed as the
                     final project of a course unit.
                  </p>
                  <ul className="project-list">
                     <li>Flutter</li>
                     <li>OpenAi API</li>
                  </ul>
               </div>
               <div className="project-img-cont">
                  <img src={UTADSummit} alt="" className="project-img" />
               </div>
            </div>

            {/* KeyCord  */}
            <div className="project-container-even">
               <div className="project-img-cont">
                  <img src={UTADSummit} alt="" className="project-img" />
               </div>
               <div className="project-text">
                  <h3>KeyCord</h3>
                  <p>
                     A web application for purchasing game keys, with a visual
                     design inspired by Discord. Developed as the final project
                     of a course unit.
                  </p>
                  <ul className="project-list">
                     <li>C#</li>
                     <li>.Net</li>
                     <li>SQL</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Projects;
