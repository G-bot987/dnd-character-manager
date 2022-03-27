import React from "react";
import Attbox from "./Attbox";
import Charinfo from "./Charinfo";
import "./Attributes.css";


export default function Attributes({ character }) {
  console.log(character);
 

  return (
    <div className="card-container">
      <p>this is attributes</p>
      <Charinfo character={character}/>
      <Attbox character={character} />
    </div>
  );
}
