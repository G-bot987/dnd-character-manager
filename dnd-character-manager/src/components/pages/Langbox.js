import { useState } from "react";
import "./langbox.css";
import Language from "./Language";

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
        <ul className="list-container">
          {Object.keys(languages).map((dialect, index) => (
            <li key={`${index}-dialect`}>
              <p>{dialect}</p>
              <div>
                {languages[dialect].map((language, index) => (
                  <Language language={language} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
