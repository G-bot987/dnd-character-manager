import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Dialects from "./Dialects.js";
import Written from "./WrittenLanguageDetails";
import Spoken from "./SpokenLanguageDetails";
import Proficiency from "./ProficiencyLanguageDetails";
import Infection from "./InflectionLanguageDetails";
export default function Languagedetail({
  language,
  inflection,
  spoken,
  written,
  proficiency,
  dialect,
  key,
}) {
  // inflection
  const [inflectionState, setInflectionState] = useState(() => {
    const saved = localStorage.getItem(language.language + "inflection");
    console.log("inflection saved ", saved);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(
      language.language + "inflection",
      JSON.stringify(inflectionState)
    );
  }, [inflectionState]);

  // proficiency
  const [proficiencyState, setProficiencyState] = useState(() => {
    const saved = localStorage.getItem(language.language + "proficiency");
    console.log("proficiency saved ", saved);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(
      language.language + "proficiency",
      JSON.stringify(proficiencyState)
    );
  }, [proficiencyState]);

  // spoken
  const [spokenState, setSpokenState] = useState(() => {
    const saved = localStorage.getItem(language.language + "spoken");
    console.log("spoken saved ", saved);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing spoken
    localStorage.setItem(
      language.language + "spoken",
      JSON.stringify(spokenState)
    );
  }, [spokenState]);

  // written
  const [writtenState, SetWrittenState] = useState(() => {
    const saved = localStorage.getItem(language.language + "written");
    console.log("written saved ", saved);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing spoken
    localStorage.setItem(
      language.language + "written",
      JSON.stringify(writtenState)
    );
  }, [writtenState]);

  //  making sure dialect is array when none exist instead of undefined
  const [show, setShow] = useState(false);
  if (dialect === undefined) {
    dialect = [];
  } else {
  }

  return (
    <div className="language-detail-box" key={key}>
      <div className="first-row">
        <div className="row-language-details">
          <ul className="language-details-list">
            <Proficiency
              proficiency={proficiency}
              setProficiencyState={setProficiencyState}
              proficiencyState={proficiencyState}
            />
            <Infection
              inflection={inflection}
              setInflectionState={setInflectionState}
              inflectionState={inflectionState}
            />
          </ul>
        </div>
        <div className="row-language-details">
          <ul className="language-details-list-2">
            <Spoken
              spoken={spoken}
              setSpokenState={setSpokenState}
              spokenState={spokenState}
            />
            <Written
              written={written}
              SetWrittenState={SetWrittenState}
              writtenState={writtenState}
            />
          </ul>
        </div>
      </div>
      {dialect.length > 0 && (
        <div className="dialect-dropdown">
          <div
            className="click-container-dialects"
            onClick={() => setShow(!show)}
          >
            <div
              className="dialects-arrow-container"
              style={{
                marginTop: show ? "0.3rem " : "",
              }}
            >
              <div
                className="dialects-arrow-down"
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </div>
            dialects
            <div
              className="dialects-arrow-container"
              style={{
                marginTop: show ? "0.3rem " : "",
              }}
            >
              <div
                className="dialects-arrow-down"
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </div>
          </div>
          {show ? (
            <div>
              {dialect.map((version, index) => (
                <ul className="dialects-list" key={index}>
                  <Dialects version={version} index={index} />
                </ul>
              ))}
            </div>
          ) : null}
        </div>
      )}
      <div
        className="add-language-click-container"
        // onClick={() => setpropertySelected(!propertySelected)}
      >
        <p className="add-language">add to my languages</p>
      </div>
    </div>
  );
}
