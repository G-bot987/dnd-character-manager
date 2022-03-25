import React from "react";
import Attbox from "./Attbox";
import Charinfo from "./Charinfo";
import "./Attributes.css";


export default function Attributes({ attributeInformation }) {
  console.log(attributeInformation);

  return (
    <div className="card-container">
      <p>this is attributes</p>
      <Charinfo/>
      <Attbox attributeInformation={attributeInformation} />
    </div>
  );
}
