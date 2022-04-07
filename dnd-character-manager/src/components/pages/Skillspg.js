import React from "react";
import "./Skillspg.css";
export default function Skillspg({ skillsTemplate }) {
  console.log("skills " + JSON.stringify(skillsTemplate));
  // sort skills alphabetically
  const sorted = skillsTemplate.skills.sort((a, b) =>
    a.skillname.localeCompare(b.skillname)
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
  // push skills to array based on powering attribute
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
  // after skills pushed to array based on powering att, they are then ordered alphabetically.

  // sorted alphatetically ordered skills are then pushed to one array to be mapped over in component.
  const sortedSkills = Charisma.concat(
    Constitution,
    Dexterity,
    Inteligence,
    Strength,
    Wisdom
  );

  console.log("sorted skills " + JSON.stringify(sortedSkills));

  return (
    <div className="skill-container">
      <ul>
        {sortedSkills.map(({ skillname, poweringatt }, index) => (
          <li className="skill-box" id={index} key={index}>
            <p>{skillname}</p>
            <span className="dot"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
