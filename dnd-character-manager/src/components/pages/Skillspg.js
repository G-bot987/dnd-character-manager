import React from "react";
import "./Skillspg.css";
export default function Skillspg({ skillsTemplate }) {
  console.log("skills " + JSON.stringify(skillsTemplate));
  // sort skills by powering attribute
  const sorted = skillsTemplate.skills.sort((a, b) =>
    a.poweringatt.localeCompare(b.poweringatt)
  );
  console.log("sorted " + JSON.stringify(sorted));

  // pushing function

  const Charisma = [];
  const Constitution = [];
  const Dexterity = [];
  const Inteligence = [];
  const Strength = [];
  const Wisdom = [];
  const error = [];

  sorted.forEach(function (skill) {
    console.log(skill);
    if (skill.poweringatt === "Charisma") {
      Charisma.push(skill);

      return;
    } else if (skill.poweringatt === "Constitution") {
      Constitution.push(skill);
      return;
    } else if (skill.poweringatt === "Dexterity") {
      Dexterity.push(skill);
      return;
    } else if (skill.poweringatt === "Inteligence") {
      Inteligence.push(skill);
      return;
    } else if (skill.poweringatt === "Strength") {
      Strength.push(skill);
      return;
    } else if (skill.poweringatt === "Wisdom") {
      Wisdom.push(skill);
      return;
    } else {
      console.log("error");
      error.push(skill);
      return;
    }
  });

  return (
    <div className="skill-container">
      <ul>
        {sorted.map(({ skillname, poweringatt }, index) => (
          <li className="skill-box" id={index} key={index}>
            <p>{skillname}</p>
            <span className="dot"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
