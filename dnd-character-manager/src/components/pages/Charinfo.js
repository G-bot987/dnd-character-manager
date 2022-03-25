import React from "react";
import "./Charinfo.css";

export default function Charinfo() {
  return (
    <div className="char-info-container">
      <div className="name-container">
        <p>I am name</p>
      </div>

      <div className="class-container">
        <p>class</p>
      </div>

      <div className="race-container">
        <p>race</p>
      </div>
      <div className="xp-container">
        <p>xp</p>
      </div>
      <div className="alignment-container">
        <p>alignment</p>
      </div>
    </div>
  );
}
