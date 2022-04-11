import { useState } from "react";
import "./Attbox.css";
import Skills from "./Skills";

export default function Attbox({ character, template }) {
  const [show, setShow] = useState(false);

  console.log("new stats ");
  return (
    <div className="attribute-container">
      <div className="cirlce">
        <div
          className="attribute-arrow"
          onClick={() => setShow(!show)}
          style={{
            transform: show ? "rotate(130deg)" : "",
            transition: "transform 150ms ease",
          }}
        ></div>
      </div>
      {show ? (
        <ul className="list-container">
          {template.map(({ attribute, skills }, index) => (
            <div className="attribute-skill-container" key={attribute}>
              <li className="attribute-box" id={index}>
                {attribute}
                {console.log(
                  "inside attbox attribute.skills " + JSON.stringify(skills)
                )}
              </li>
              <Skills skills={skills} />
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
