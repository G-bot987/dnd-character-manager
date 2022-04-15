import React from "react";
import Attbox from "./Attbox";
import Charinfo from "./Charinfo";
import "./Attributes.css";
import template from "../../data/templatecard";
import Langbox from "./Langbox";

export default function Attributes({ character }) {
  const languages = template.languages;
  console.log("template " + JSON.stringify(languages, null, 2));

  return (
    <div className="card-container">
      <div
        className="avatar-img"
        style={{ backgroundImage: `url(${character.profile.avatar})` }}
      ></div>

      <Charinfo character={character} />
      <div className="card-body">
        <Attbox character={character} template={template} />
        <Langbox languages={languages} />
      </div>
    </div>
  );
}
