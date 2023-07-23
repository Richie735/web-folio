import React from "react";
import {
   FaCss3Alt,
   FaHtml5,
   FaJsSquare,
   FaPython,
   FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiCplusplus } from "react-icons/si";
import "./skills.css";

function Skills() {
   return (
      <section id="skills">
         <h2 className="numbered-heading-odd">
            <span>03.</span>Skills
         </h2>

         <div class="skills_container grid">
            <div class="skills_cont">
               <h3 class="skills_title">FRONTEND</h3>
               <div class="skills_list grid">
                  {/* HTML */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <FaHtml5 /> HTML
                        </p>
                        <span class="skills_number">90%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "90%" }}
                        ></span>
                     </div>
                  </div>

                  {/* CSS */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <FaCss3Alt /> CSS
                        </p>
                        <span class="skills_number">80%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "80%" }}
                        ></span>
                     </div>
                  </div>

                  {/* JavaScript */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <FaJsSquare /> JavaScript
                        </p>
                        <span class="skills_number">35%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "35%" }}
                        ></span>
                     </div>
                  </div>

                  {/* React */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <FaReact /> React
                        </p>
                        <span class="skills_number">30%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "30%" }}
                        ></span>
                     </div>
                  </div>
               </div>
            </div>

            <div>
               <h3 class="skills_title">BACKEND</h3>
               <div class="skills_list grid">
                  {/* C C++ C# */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <SiCplusplus /> C C++ C#
                        </p>
                        <span class="skills_number">90%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "90%" }}
                        ></span>
                     </div>
                  </div>

                  {/* Python */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <FaPython />
                           Python
                        </p>
                        <span class="skills_number">75%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "75%" }}
                        ></span>
                     </div>
                  </div>

                  {/* SQL */}
                  <div class="skills_data">
                     <div class="skills_up">
                        <p class="skills_name">
                           <GrMysql /> SQL
                        </p>
                        <span class="skills_number">40%</span>
                     </div>
                     <div class="skills_bar">
                        <span
                           class="skills_percentage"
                           style={{ width: "40%" }}
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Skills;
