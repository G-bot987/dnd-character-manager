import React from "react";
import { useState, useEffect } from "react";
import "./Skills.css";

export default function Skill({ skillname }) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem(skillname);
    const initialValue = JSON.parse(saved);
    console.log("initial value " + initialValue);
    return initialValue || false;
  });

  useEffect(() => {
    // storing selected skill
    localStorage.setItem(skillname, JSON.stringify(skillsSelected));
  }, [skillsSelected]);

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
