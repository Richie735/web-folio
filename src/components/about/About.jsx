import React from "react";
import Me from "../../assets/me-about.jpeg";
import "./about.css";

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
            My name is Ricardo Pereira, I am in the last year of the degree in Computer Engineering. Although I have yet to gain professional experience, I have a strong desire to learn and the ability to quickly adapt to new technologies and work effectively within a team environment.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            omnis tenetur culpa nostrum tempore cupiditate, modi iusto
            provident, aut debitis est. Nulla quibusdam praesentium, rerum
            eveniet beatae officia quisquam esse!
          </p>
          <a href="/Resume" className="btn">Check my Cv</a>
        </div>
      </div>
    </section>
  );
}

export default About;
