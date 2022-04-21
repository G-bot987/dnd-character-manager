import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Written from "./WrittenLanguageDetails";
import Spoken from "./SpokenLanguageDetails";
import Proficiency from "./ProficiencyLanguageDetails";
import Infection from "./InflectionLanguageDetails";

export default function LanguageNoDialectsDetails({ dialect, language }) {
  // inflection
  const [inflectionState, setInflectionState] = useState(() => {
    const saved = localStorage.getItem(
      language.language + dialect.name + "inflection"
    );
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(
      language.language + dialect.name + "inflection",
      JSON.stringify(inflectionState)
    );
  }, [inflectionState]);

  // proficiency
  const [proficiencyState, setProficiencyState] = useState(() => {
    const saved = localStorage.getItem(
      language.language + dialect.name + "proficiency"
    );
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(
      language.language + dialect.name + "proficiency",
      JSON.stringify(proficiencyState)
    );
  }, [proficiencyState]);

  // spoken
  const [spokenState, setSpokenState] = useState(() => {
    const saved = localStorage.getItem(
      language.language + dialect.name + "spoken"
    );
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing spoken
    localStorage.setItem(
      language.language + dialect.name + "spoken",
      JSON.stringify(spokenState)
    );
  }, [spokenState]);

  // written
  const [writtenState, SetWrittenState] = useState(() => {
    const saved = localStorage.getItem(
      language.language + dialect.name + "written"
    );
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing written

    localStorage.setItem(
      language.language + dialect.name + "written",
      JSON.stringify(writtenState)
    );
  }, [writtenState]);

  const [show, setShow] = useState(false);

  return (
    <div className="language-detail-box">
      <div onClick={() => setShow(!show)} className="click-container">
        <div
          className="arrow-container"
          style={{
            marginTop: show ? "0.3rem " : "",
          }}
        >
          <div
            className="language-detail-arrow-down"
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          ></div>
        </div>
        {dialect.name}
        <div
          className="arrow-container"
          style={{
            marginTop: show ? "0.3rem " : "",
          }}
        >
          <div
            className="language-detail-arrow-down"
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          ></div>
        </div>
      </div>
      {show ? (
        <div className="first-row">
          <div className="row-language-details">
            <ul className="language-details-list">
              <Proficiency
                proficiency={dialect.proficiency}
                setProficiencyState={setProficiencyState}
                proficiencyState={proficiencyState}
              />
              <Infection
                inflection={dialect.inflection}
                setInflectionState={setInflectionState}
                inflectionState={inflectionState}
              />
            </ul>
          </div>
          <div className="row-language-details">
            <ul className="language-details-list-2">
              <Spoken
                spoken={dialect.spoken}
                setSpokenState={setSpokenState}
                spokenState={spokenState}
              />
              <Written
                written={dialect.written}
                SetWrittenState={SetWrittenState}
                writtenState={writtenState}
              />
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
