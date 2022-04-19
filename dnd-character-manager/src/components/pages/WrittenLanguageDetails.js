import React from "react";
import { useState } from "react";

export default function Written({ written, SetWrittenState, writtenState }) {
  console.log(written);
  return (
    <li className="language-details-list-item">
      {" "}
      written{written}
      <div
        id={written}
        onClick={() => SetWrittenState(!writtenState)}
        className="language-detail-written-dot"
        style={{
          backgroundColor: writtenState ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </li>
  );
}
