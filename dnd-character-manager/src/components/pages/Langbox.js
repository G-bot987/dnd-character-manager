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
            margin: show ? "0.3rem 0 0 0.4rem" : "",
          }}
        ></div>
      </div>
      {show ? (
        <ul className="list-container">
          {Object.keys(languages).map((dialect, index) => (
            <div className="list" key={`${index}-dialect`}>
              <li className="attribute-box"> {dialect} </li>

              <Languages languages={languages[dialect]} />
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
