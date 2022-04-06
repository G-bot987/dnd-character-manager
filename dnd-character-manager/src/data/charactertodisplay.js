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
    { skill: "athletics", proficiency: 1 },
    { skill: "intimatatoin", proficiency: 1 },
    { skill: "investigation", proficiency: 1 },
    { skill: "perception", proficiency: 1 },
    { skill: "persuasion", proficiency: 1 },
    { skill: "stealth", proficiency: 1 },
    { skill: "survival", proficiency: 1 },
    { skill: "traditions", proficiency: 1 },
  ],
};

export default character;
