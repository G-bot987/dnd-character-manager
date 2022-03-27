import React from "react";
import "./Charinfo.css";

export default function Charinfo({ character }) {
  return (
    <div className="char-info-container">
      <div className="name-container">
        <p>I am name:</p>
        <p>{character.profile.charName}</p>
      </div>
      <div className="xp-container">
        <p>xp:</p>
        <p>{character.profile.xp}</p>
      </div>
      <div className="xp-container">
        <p>lv:</p>
        <p>{character.profile.lv}</p>
      </div>
      <div className="class-container">
        <p>class:</p>
        <p>{character.profile.class}</p>
      </div>

      <div className="race-container">
        <p>race:</p>
        <p>{character.profile.race}</p>
      </div>

      <div className="alignment-container">
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
