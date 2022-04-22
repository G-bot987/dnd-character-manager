import "./languages.css";

export default function UserLanguageSelections(selectionName, key) {
  if (selectionName.proficency === "false") {
    return null;
  }

  return (
    <li key={key}>
      {selectionName.selectionName}
      selected
      {selectionName.proficency}
    </li>
  );
}
