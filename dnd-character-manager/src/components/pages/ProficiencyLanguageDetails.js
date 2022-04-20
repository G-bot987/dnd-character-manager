export default function Proficiency({
  proficiency,
  setProficiencyState,
  proficiencyState,
}) {
  return (
    <li className="language-details-list-item">
      {" "}
      proficiency{proficiency}
      <div
        id={proficiency}
        onClick={() => setProficiencyState(!proficiencyState)}
        className="language-detail-dot"
        style={{
          backgroundColor: proficiencyState ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </li>
  );
}
