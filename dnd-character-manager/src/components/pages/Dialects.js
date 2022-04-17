import React from "react";
import { useState, useEffect } from "react";
import "./dialects.css";

export default function Dialects({ version, index }) {
  return <li key={index}>{version.name}</li>;
}
