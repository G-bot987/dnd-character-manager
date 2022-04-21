import { useState } from "react";
import "./languages.css";

export default function UserLanguageSelections(selectionName, proficency, key) {
  console.log("sec.pr " + typeof selectionName.proficency);
  if (selectionName.proficency === "false") {
    return null;
  }

  return (
    <li>
      {selectionName.selectionName}
      selected
      {selectionName.proficency}
    </li>
  );
}
