import { useState } from "react";
import "./language.css";
import Language from "./Language";

export default function Attributes({ languages }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="cirlce-dropdown-language">
        <p className="dialect-name">Dialects</p>
        <div
          className="language-arrow-down"
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
