import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#bio"
          onClick={() => handlePageChange("bio")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Bio" ? "nav-link active" : "nav-link"}
        >
          character bio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#attributes"
          onClick={() => handlePageChange("attributes")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Attributes" ? "nav-link active" : "nav-link"
          }
        >
          attributes
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#notes"
          onClick={() => handlePageChange("notes")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Notes" ? "nav-link active" : "nav-link"}
        >
          notes
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
