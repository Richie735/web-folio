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
                  <div class="timeline-date">OCT 2020 - JUL 2023</div>
                  <div class="timeline-content">
                     <h3>Bachelor of Computer Engineering</h3>
                     <h5>Utad</h5>
                  </div>
               </div>
               <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">JUL 2023 - ONGOING</div>
                  <div class="timeline-content">
                     <h3>Job Hunting</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
