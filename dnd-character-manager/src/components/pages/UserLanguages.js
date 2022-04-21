import { useState } from "react";
import "./languages.css";
import UserLanguageSelections from "./UserLanguageSelections";

export default function UserLanguages() {
  const [show, setShow] = useState(false);

  const items = { ...localStorage };
  // console.log("items" + JSON.stringify(items));

  const itemArray = [];
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    // console.log(localStorage.getItem(localStorage.key(i)));
    const preparsed = localStorage.getItem(localStorage.key(i));
    const parsed = JSON.parse(preparsed);
    itemArray.push(preparsed);
  }
  console.log("itemArray" + itemArray);

  return (
    <div>
      <div className="cirlce-dropdown-language">
        <p className="dialect-name">my languages</p>
        <div
          className="language-arrow-down"
          onClick={() => setShow(!show)}
          style={{
            transform: show ? "rotate(225deg)" : "",
            transition: "transform 150ms ease",
          }}
        ></div>
      </div>
      {show ? (
        <div>
          <ul>
            {Object.keys(items).map((status, index) => (
              <UserLanguageSelections
                key={index}
                selectionName={status}
                proficency={items[status]}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
