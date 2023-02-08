import React from "react";
import "./social.css";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a
            href="https://github.com/Richie735"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ricardopereira735/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/richie_richie_7/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
