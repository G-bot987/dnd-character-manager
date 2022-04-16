import { useState } from "react";
import "./langbox.css";
import Languages from "./Languages";

export default function Attributes({ languages }) {
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
      {show ? (
        <div className="list-container">
          {Object.keys(languages).map((dialect, index) => (
            <div key={`${index}-dialect`}>
              <p> {dialect} </p>

              <Languages languages={languages[dialect]} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
