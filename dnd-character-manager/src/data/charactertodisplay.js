import img from "../images/nimrodel.png";
const character = {
  profile: {
    charName: "Nimrodel",
    class: "wanderer",
    lv: 1,
    race: "Astralende",
    xp: 200,
    background: "scion of a fallen house",
    strength: "loyalty",
    weakness: "unconcompromising",
    avatar: img,
  },
  coreStats: [
    { attname: "Strength", score: 8 },
    { attname: "Dexterity", score: 8 },
    { attname: "Constitution", score: 8 },
    { attname: "Charisma", score: 8 },
    { attname: "Inteligence", score: 8 },
    { attname: "Wisdom", score: 8 },
  ],
  skillStats: [
    { skill: "athletics", proficiency: true },
    { skill: "intimatatoin", proficiency: true },
    { skill: "investigation", proficiency: true },
    { skill: "perception", proficiency: true },
    { skill: "persuasion", proficiency: true },
    { skill: "stealth", proficiency: true },
    { skill: "survival", proficiency: true },
    { skill: "traditions", proficiency: true },
  ],
};

export default character;
