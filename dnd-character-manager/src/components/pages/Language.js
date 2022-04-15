import React from "react";
import { useState, useEffect } from "react";
import "./Skills.css";

export default function Language({ languagegroup }) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem(languagegroup);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  console.log("I am language" + languagegroup);
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(languagegroup, JSON.stringify(skillsSelected));
  }, [skillsSelected]);

  return (
    <>
      <p>{languagegroup}</p>
      <div
        onClick={() => setSkillsSelected(!skillsSelected)}
        id={languagegroup}
        className="dot"
        style={{
          backgroundColor: skillsSelected ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </>
  );
}
