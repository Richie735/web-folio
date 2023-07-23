import React from "react";
import CVFile from "../../assets/CV.pdf";
import Me from "../../assets/me-about.jpeg";
import "./about.css";

const DownloadButton = () => {
   const handleDownload = () => {
      const link = document.createElement("a");
      link.href = CVFile;
      link.setAttribute("download", "CV.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   return (
      // eslint-disable-next-line
      <a className="btn" role="button" onClick={handleDownload}>
         Check my CV
      </a>
   );
};

function About() {
   return (
      <section className="about" id="about">
         <h2 className="numbered-heading-odd">
            <span>01.</span> About Me
         </h2>

         <div className="about_container container">
            <div className="about_me">
               <img src={Me} alt="" className="about_img" />
            </div>

            <div className="about_content">
               <p>
                  Hi, my name is <b>Ricardo</b>, a recent Computer Engineering
                  graduate. Although I have yet to gain professional experience,
                  I have a strong desire to learn and the ability to quickly
                  adapt to new technologies and work effectively within a team
                  environment.
               </p>
               <p>
                  In my free time, I indulge in reading, gaming, and exploring
                  new technologies. Currently, I'm dedicated to learning German
                  and enhancing my backend skills. I'm eager to seize any
                  opportunity that comes my way and contribute my best.
               </p>
               <DownloadButton />
            </div>
         </div>
      </section>
   );
}

export default About;
