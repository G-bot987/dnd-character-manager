import React from "react";
import Attbox from "./Attbox";
import Charinfo from "./Charinfo";
import "./Attributes.css";
import skillsTemplate from "../../data/skillstodisplay";
import Skillspg from "./Skillspg";
export default function Attributes({ character }) {
  console.log(character.profile.avatar);

  return (
    <div className="card-container">
      <p>this is attributes</p>
      <div
        className="avatar-img"
        style={{ backgroundImage: `url(${character.profile.avatar})` }}
      ></div>

      <Charinfo character={character} />
      <div className="card-body">

      <Attbox character={character} />
      <Skillspg skillsTemplate={skillsTemplate} />
      </div>
    </div>
  );
}
