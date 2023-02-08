import React from "react";
import "./hero.css";

function letEffect() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  
  document.querySelector("h1").onmouseover = (event) => {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
  
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
  
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
  
      iteration += 1 / 3;
    }, 30);
  }; 
}

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h5>Hi, my name is</h5>
      <h1 data-value="Ricardo Pereira" onMouseOver={letEffect}>Ricardo Pereira</h1>
      <h3>I’m a software engineer</h3>
    </section>
  );
};

export default Hero;
