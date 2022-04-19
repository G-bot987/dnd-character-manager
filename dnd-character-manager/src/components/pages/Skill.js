import React from "react";
import { useState, useEffect } from "react";
import "./Skills.css";

export default function Skill({ name }) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem(name);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  useEffect(() => {
    // storing selected skill
    localStorage.setItem(name, JSON.stringify(skillsSelected));
  }, [skillsSelected, name]);

  return (
    <>
      <p>{name}</p>
      <div
        onClick={() => setSkillsSelected(!skillsSelected)}
        id={name}
        className="dot"
        style={{
          backgroundColor: skillsSelected ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </>
  );
}
