import { useState } from "react";
import "./langbox.css";
import Language from "./Language";

export default function Attributes({ languages }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="cirlce-dropdown">
        <p className="skill-name">Languages</p>
        <div
          className="skill-arrow"
          onClick={() => setShow(!show)}
          style={{
            transform: show ? "rotate(225deg)" : "",
            transition: "transform 150ms ease",
          }}
        ></div>
      </div>
      {show ? (
        <div>
          {languages.map((language, index) => (
            <Language key={`${index}-language`} language={language} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
