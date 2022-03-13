import React from "react";

import Attbox from "./Attbox";
export default function Attributes({ attributeInformation }) {
  console.log(attributeInformation);

  return (
    <div className="attributes container">
      <p>this is attributes</p>
      <Attbox attributeInformation={attributeInformation} />
    </div>
  );
}
