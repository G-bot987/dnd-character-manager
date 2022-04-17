import React from "react";
import { useState, useEffect } from "react";
import "./dialects.css";

export default function Dialects({ version, index }) {
  return (
    <li className="dialect-box" key={index}>
      {version.name} proficiency{version.proficiency}
    </li>
  );
}
