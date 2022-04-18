import React from "react";
import { useState, useEffect } from "react";
import "./dialects.css";

export default function Dialects({ version, index }) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem(version.proficiency);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  return (
    <li className="dialect-box" key={index}>
      {version.name} proficiency{version.proficiency}
      <div
        id={version.proficiency}
        onClick={() => setSkillsSelected(!skillsSelected)}
        className="dialect-detail-dot"
        style={{
          backgroundColor: skillsSelected ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </li>
  );
}
