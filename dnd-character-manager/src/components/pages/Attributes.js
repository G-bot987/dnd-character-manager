import React from "react";
import Attbox from "./Attbox";
import Charinfo from "./Charinfo";
import "./Attributes.css";
import img from "../../images/nimrodel.png";

export default function Attributes({ character }) {
  console.log(character.profile.avatar);
  // const img = character.profile.avatar;
  return (
    <div className="card-container">
      <p>this is attributes</p>
      <div
        className="avatar-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <Charinfo character={character} />
      <Attbox character={character} />
    </div>
  );
}
