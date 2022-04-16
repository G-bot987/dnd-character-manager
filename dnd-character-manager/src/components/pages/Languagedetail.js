import React from "react";
import { useState, useEffect } from "react";
import "./Skills.css";

export default function Languagedetail({ language, inflection }) {
  console.log(inflection);
  return (
    <div>
      {language} {inflection}
    </div>
  );
}
