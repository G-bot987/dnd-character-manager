export default function Spoken({ spoken, setSpokenState, spokenState }) {
  return (
    <li className="language-details-list-item">
      {" "}
      Spoken{spoken}
      <div
        id={spoken}
        onClick={() => setSpokenState(!spokenState)}
        className="language-detail-dot"
        style={{
          backgroundColor: spokenState ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </li>
  );
}
