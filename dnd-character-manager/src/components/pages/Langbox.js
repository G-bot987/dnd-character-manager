import { useState } from "react";
import "./langbox.css";
import Language from "./Language";

export default function Attributes({ languages }) {
  const [show, setShow] = useState(false);

  const languagesarray = Object.entries(languages);
  console.log("obj.entries" + JSON.stringify(languagesarray, null, 2));
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
          {languagesarray.map(
            ({ languagegroup }, index) => (
              console.log(languagegroup),
              (
                <div className="attribute-skill-container" key={index}>
                  <li className="attribute-box" id={languagegroup}>
                    {languagegroup}
                  </li>
                  <Language languagegroup={languagegroup} />
                </div>
              )
            )
          )}
        </ul>
      ) : null}
    </div>
  );
}
