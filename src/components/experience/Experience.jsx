import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="numbered-heading-even">
        <span>02.</span>Experience / Education
      </h2>
      <div className="experience">
        <div class="timeline">
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2020 - 2023</div>
            <div class="timeline-content">
              <h3>Bachelor of Computer Engineering</h3>
              <h5>Utad</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2021</div>
            <div class="timeline-content">
              <h3>timeline item title</h3>
              <h5>Local</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2022</div>
            <div class="timeline-content">
              <h3>timeline item title</h3>
              <h5>Local</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
