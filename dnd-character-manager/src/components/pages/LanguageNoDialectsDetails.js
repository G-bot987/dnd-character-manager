import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Written from "./WrittenLanguageDetails";
import Spoken from "./SpokenLanguageDetails";
import Proficiency from "./ProficiencyLanguageDetails";
import Infection from "./InflectionLanguageDetails";
export default function LanguageNoDialectsDetails({ language }) {
  // inflection
  const [inflectionState, setInflectionState] = useState(() => {
    const saved = localStorage.getItem(language.language + "inflection");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing inflection
    localStorage.setItem(
      language.language + "inflection",
      JSON.stringify(inflectionState)
    );
  }, [inflectionState]);

  // proficiency
  const [proficiencyState, setProficiencyState] = useState(() => {
    const saved = localStorage.getItem(language.language + "proficiency");
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

  return (
    <div className="language-detail-box">
      <div className="first-row">
        <div className="row-language-details">
          <ul className="language-details-list">
            <Proficiency
              proficiency={language.proficiency}
              setProficiencyState={setProficiencyState}
              proficiencyState={proficiencyState}
            />
            <Infection
              inflection={language.inflection}
              setInflectionState={setInflectionState}
              inflectionState={inflectionState}
            />
          </ul>
        </div>
        <div className="row-language-details">
          <ul className="language-details-list-2">
            <Spoken
              spoken={language.spoken}
              setSpokenState={setSpokenState}
              spokenState={spokenState}
            />
            <Written
              written={language.written}
              SetWrittenState={SetWrittenState}
              writtenState={writtenState}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
