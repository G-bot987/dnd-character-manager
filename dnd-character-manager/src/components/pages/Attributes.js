import React from "react";
import Attbox from "./Attbox";
import Charinfo from "./Charinfo";
import "./Attributes.css";

export default function Attributes({ character }) {
  console.log(character.profile.avatar);
  // const img = character.profile.avatar;
  return (
    <div className="card-container">
      <p>this is attributes</p>
      <div
        className="avatar-img"
        style={{ backgroundImage: `url(${character.profile.avatar})` }}
      ></div>

      <Charinfo character={character} />
      <Attbox character={character} />
    </div>
  );
}
