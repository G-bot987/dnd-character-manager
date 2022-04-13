import React from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../../useLocalStorage";
import "./Skills.css";

export default function Skill({ skillname }) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem("skillSelected");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing selected skill
    localStorage.setItem("skillSelected", JSON.stringify(skillsSelected));
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
