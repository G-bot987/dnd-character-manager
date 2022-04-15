import { useState } from "react";
import "./langbox.css";
export default function Attributes({ languages }) {
  console.log("langbox " + JSON.stringify(languages, null, 2));
  const [show, setShow] = useState(false);
  return (
    <div className="language-container">
      {!show ? <p className="lang-title">Languages</p> : null}
      <div className="cirlce">
        <div
          className="language-arrow"
          onClick={() => setShow(!show)}
          style={{
            transform: show ? "rotate(130deg)" : "",
            transition: "transform 150ms ease",
          }}
        ></div>
      </div>
    </div>
  );
}
