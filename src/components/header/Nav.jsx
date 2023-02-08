import React, { useState } from "react";
import { BiBookBookmark, BiFolder, BiHome, BiStar, BiUser } from "react-icons/bi";
import "./nav.css";

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#hero"
        onClick={() => setActive("#hero")}
        className={active === "#hero" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#skills"
        onClick={() => setActive("#skills")}
        className={active === "#skills" ? "active" : ""}
      >
        <BiStar />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("#projects")}
        className={active === "#projects" ? "active" : ""}
      >
        <BiFolder />
      </a>
    </nav>
  );
}

export default Nav;
