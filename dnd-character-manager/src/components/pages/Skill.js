import React from "react";
import { useState } from "react";
import "./Skills.css";

export default function Skill({ skillname }) {
  const [skillsSelected, setSkillsSelected] = useState(false);

  return (
    <>
      <p>{skillname}</p>
      <div
        onClick={() =>
          setSkillsSelected(!skillsSelected, console.log("here " + skillname))
        }
        id={skillname}
        className="dot"
        style={{
          backgroundColor: skillsSelected ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </>
  );
}
