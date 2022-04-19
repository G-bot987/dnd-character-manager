export default function Infection({
  inflection,
  setInflectionState,
  inflectionState,
}) {
  console.log(inflection);
  return (
    <li className="language-details-list-item">
      {" "}
      inflection{inflection}
      <div
        id={inflection}
        onClick={() => setInflectionState(!inflectionState)}
        className="language-detail-inflection-dot"
        style={{
          backgroundColor: inflectionState ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </li>
  );
}
