import { useState } from "react";
import "./Attbox.css";
import Skills from "./Skills";

export default function Attbox({ character, template }) {
  const [show, setShow] = useState(false);
  const attributes = template.attributes;

  return (
    <div className="attribute-container">
      {!show ? <p className="attribute-title"> Attributes</p> : null}
      <div className="cirlce">
        <div
          className="attribute-arrow"
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
          {attributes.map(({ attribute, skills }, index) => (
            <div className="attribute-skill-container" key={attribute}>
              <li className="attribute-box" id={index}>
                {attribute}
              </li>
              <Skills skills={skills} />
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
