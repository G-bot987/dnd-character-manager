import React from "react";
import "./Charinfo.css";

export default function Charinfo({ character }) {
  return (
    <div className="char-info-container">
      <div className="quality-container">
        <p className="defined">Name: {character.profile.charName}</p>
      </div>
      <div className="quality-container">
        <p className="defined">xp: {character.profile.xp}</p>
      </div>
      <div className="quality-container">
        <p className="defined">lv: {character.profile.lv}</p>
      </div>
      <div className="quality-container">
        <p className="defined">class: {character.profile.class}</p>
      </div>

      <div className="quality-container">
        <p className="defined">race: {character.profile.race}</p>
      </div>

      <div className="quality-container">
        <p className="defined">background: {character.profile.background}</p>
        <p className="defined-background">
          strength: {character.profile.strength}
        </p>
        <p className="defined-background">
          weakness: {character.profile.weakness}
        </p>
      </div>
    </div>
  );
}
