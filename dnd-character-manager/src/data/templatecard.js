export const template = {
  attributes: [
    {
      attribute: "Charisma",
      abr: "Cha",
      skills: [
        { name: "deception", poweringatt: "Charisma" },
        { name: "intimatation", poweringatt: "Charisma" },
        { name: "performance", poweringatt: "Charisma" },
        { name: "persuasion", poweringatt: "Charisma" },
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
        { name: "acrobatics", poweringatt: "Dexterity" },
        { name: "sleight of hand", poweringatt: "Dexterity" },
        { name: "stealth", poweringatt: "Dexterity" },
      ],
    },

    {
      attribute: "Inteligence",
      abr: "Int",
      skills: [
        { name: "arcana", poweringatt: "Inteligence" },
        { name: "dark arcana", poweringatt: "Inteligence" },
        { name: "forbidden history", poweringatt: "Inteligence" },
        { name: "history", poweringatt: "Inteligence" },
        { name: "investigation", poweringatt: "Inteligence" },
        { name: "lore", poweringatt: "Inteligence" },
        { name: "nature", poweringatt: "Inteligence" },
        { name: "religion", poweringatt: "Inteligence" },
        { name: "traditions", poweringatt: "Inteligence" },
      ],
    },

    {
      attribute: "Strength",
      abr: "Str",
      skills: [{ name: "athletics", poweringatt: "Strength" }],
    },

    {
      attribute: "Wisdom",
      abr: "Wis",
      skills: [
        { name: "animal handling", poweringatt: "Wisdom" },
        { name: "insight", poweringatt: "Wisdom" },
        { name: "medicine", poweringatt: "Wisdom" },
        { name: "perception", poweringatt: "Wisdom" },
        { name: "survival", poweringatt: "Wisdom" },
      ],
    },
  ],
  languages: {
    imperialtongues: [
      {
        language: "high imperial",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "imperial dialect",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Karsgerdi",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
    ],
  },
};

// cloned template with spread, spread is a powerful operator.
const templateSorted = { ...template };

// as template is cloned as templateSorted, we can  discard temp..sorteds array of attributes with the sorted version of attributes
templateSorted.attributes = template.attributes.map((attr) => {
  // Returning sorted skills
  return {
    ...attr,
    skills: attr.skills.sort((a, b) => a.name.localeCompare(b.name)),
  };
});
// to sanitise date json.stringify(x, null,2)

export default templateSorted;
