import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Written from "./WrittenLanguageDetails";
import Spoken from "./SpokenLanguageDetails";
import Proficiency from "./ProficiencyLanguageDetails";
import Infection from "./InflectionLanguageDetails";
export default function LanguageNoDialectsDetails({
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
    // console.log("inflection saved ", saved);
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
    // console.log("proficiency saved ", saved);
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
    // console.log("spoken saved ", saved);
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
    // console.log("written saved ", saved);
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

  const [show, setShow] = useState(false);

  // dialect
  const [dialectState, SetDialectState] = useState(() => {
    const saved = localStorage.getItem(language.language + "dialect");
    // console.log("dialect saved ", saved);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    // storing dialect
    localStorage.setItem(
      language.language + "dialect",
      JSON.stringify(dialectState)
    );
  }, [dialectState]);

  //  making sure dialect is array when none exist instead of undefined

  return (
    <div className="language-detail-box">
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
    </div>
  );
}
