export const template = {
 attributes: [

    {
      attribute: "Charisma",
    abr: "Cha",
    skills: [
      { skillname: "deception", poweringatt: "Charisma" },
      { skillname: "intimatation", poweringatt: "Charisma" },
      { skillname: "performance", poweringatt: "Charisma" },
      { skillname: "persuasion", poweringatt: "Charisma" },
    ],
  },
  
  {
    attribute: "Constitution",
    abr: "Con",
    skills: [],
  },
  
  {
    attribute: "Dexterity",
    abr: "Dex",
    skills: [
      { skillname: "acrobatics", poweringatt: "Dexterity" },
      { skillname: "sleight of hand", poweringatt: "Dexterity" },
      { skillname: "stealth", poweringatt: "Dexterity" },
    ],
  },

  {
    attribute: "Inteligence",
    abr: "Int",
    skills: [
      { skillname: "arcana", poweringatt: "Inteligence" },
      { skillname: "dark arcana", poweringatt: "Inteligence" },
      { skillname: "forbidden history", poweringatt: "Inteligence" },
      { skillname: "history", poweringatt: "Inteligence" },
      { skillname: "investigation", poweringatt: "Inteligence" },
      { skillname: "lore", poweringatt: "Inteligence" },
      { skillname: "nature", poweringatt: "Inteligence" },
      { skillname: "religion", poweringatt: "Inteligence" },
      { skillname: "traditions", poweringatt: "Inteligence" },
    ],
  },
  
  {
    attribute: "Strength",
    abr: "Str",
    skills: [{ skillname: "athletics", poweringatt: "Strength" }],
  },
  
  {
    attribute: "Wisdom",
    abr: "Wis",
    skills: [
      { skillname: "animal handling", poweringatt: "Wisdom" },
      { skillname: "insight", poweringatt: "Wisdom" },
      { skillname: "medicine", poweringatt: "Wisdom" },
      { skillname: "perception", poweringatt: "Wisdom" },
      { skillname: "survival", poweringatt: "Wisdom" },
    ],
  },
],
};

// console.log("template " + JSON.stringify(preTemplate));
// const template = preTemplate.map((attr) =>
//   attr.skills.sort((a, b) => a.skillname.localeCompare(b.skillname))
// );
// console.log("this is template " + template);

export default template;
