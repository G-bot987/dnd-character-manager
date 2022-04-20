import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Written from "./WrittenLanguageDetails";
import Spoken from "./SpokenLanguageDetails";
import Proficiency from "./ProficiencyLanguageDetails";
import Infection from "./InflectionLanguageDetails";

export default function LanguageNoDialectsDetails({ dialect }) {
  // inflection
  const [inflectionState, setInflectionState] = useState(() => {
    const saved = localStorage.getItem(dialect.name + "inflection");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(
      dialect.name + "inflection",
      JSON.stringify(inflectionState)
    );
  }, [inflectionState]);

  // proficiency
  const [proficiencyState, setProficiencyState] = useState(() => {
    const saved = localStorage.getItem(dialect.name + "proficiency");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing selected skill
    localStorage.setItem(
      dialect.name + "proficiency",
      JSON.stringify(proficiencyState)
    );
  }, [proficiencyState]);

  // spoken
  const [spokenState, setSpokenState] = useState(() => {
    const saved = localStorage.getItem(dialect.name + "spoken");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing spoken
    localStorage.setItem(dialect.name + "spoken", JSON.stringify(spokenState));
  }, [spokenState]);

  // written
  const [writtenState, SetWrittenState] = useState(() => {
    const saved = localStorage.getItem(dialect.name + "written");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing spoken
    localStorage.setItem(
      dialect.name + "written",
      JSON.stringify(writtenState)
    );
  }, [writtenState]);

  return (
    <div className="language-detail-box">
      <div>{dialect.name}</div>
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
    </div>
  );
}
