import React from "react";
import "./Charinfo.css";

export default function Charinfo({ character }) {
  return (
    <div className="char-info-container">
      <div className="quality-container">
        <p>Name:</p>
        <p>{character.profile.charName}</p>
      </div>
      <div className="quality-container">
        <p>xp:</p>
        <p>{character.profile.xp}</p>
      </div>
      <div className="quality-container">
        <p>lv:</p>
        <p>{character.profile.lv}</p>
      </div>
      <div className="quality-container">
        <p>class:</p>
        <p>{character.profile.class}</p>
      </div>

      <div className="quality-container">
        <p>race:</p>
        <p>{character.profile.race}</p>
      </div>

      <div className="background-container">
        <p>background:</p>
        <p>{character.profile.background}</p>
        <p>strength:</p>
        <p>{character.profile.strength}</p>
        <p>weakness:</p>
        <p>{character.profile.weakness}</p>
      </div>
    </div>
  );
}
