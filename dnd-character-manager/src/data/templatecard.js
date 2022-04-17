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
        dialect: [
          { name: "Cala", proficiency: null },
          { name: "Ru", proficiency: null },
          { name: "Leish", proficiency: null },
          { name: "Riony", proficiency: null },
          { name: "Karsgerdi", proficiency: null },
          { name: "Rius", proficiency: null },
          { name: "Teas", proficiency: null },
          { name: "Chasie", proficiency: null },
          { name: "Quic", proficiency: null },
          { name: "Tilua", proficiency: null },
          { name: "Sola", proficiency: null },
        ],
      },
      {
        language: "Cala",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Ru",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Leish",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Riony",
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
      {
        language: "Rius",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Teas",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Chasie",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Quic",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Tilua",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Sola",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
    ],

    tonguesofoldman: [
      {
        language: "Hulecian",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "old", proficiency: null },
          { name: "low", proficiency: null },
        ],
      },

      {
        language: "Liundian",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "low", proficiency: null },
        ],
      },

      {
        language: "Heroneese",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "Moni", proficiency: null },
          { name: "pheroni", proficiency: null },
          { name: "lae", proficiency: null },
          { name: "carames", proficiency: null },
          { name: "Nepti", proficiency: null },
          { name: "xousi", proficiency: null },
          { name: "hasi", proficiency: null },
          { name: "tri", proficiency: null },
          { name: "ous", proficiency: null },
          { name: "findi", proficiency: null },
          { name: "hydran", proficiency: null },
          { name: "Reean", proficiency: null },
          { name: "itees", proficiency: null },
          { name: "Annian", proficiency: null },
          { name: "tirca", proficiency: null },
          { name: "Gari", proficiency: null },
          { name: "antonese", proficiency: null },
          { name: "swordkin", proficiency: null },
          { name: "pirate", proficiency: null },
        ],
      },

      {
        language: "Deep valley",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "ende", proficiency: null },
          { name: "old", proficiency: null },
        ],
      },
    ],

    endetongues: [
      {
        language: "Haulende",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "low", proficiency: null },
        ],
      },
      {
        language: "Astralende",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "low", proficiency: null },
          { name: "nys", proficiency: null },
        ],
      },
    ],

    mountainkintongues: [
      {
        language: "Clans of Fulgrix",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "low", proficiency: null },
          { name: "singingvalley", proficiency: null },
        ],
      },
      {
        language: "Sons of Aiger",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "low", proficiency: null },
        ],
      },
    ],

    arcanetongues: [
      {
        language: "Rocian",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
      {
        language: "Gnomish",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
      },
    ],

    pyrictongues: [
      {
        language: "pyric",
        written: null,
        spoken: null,
        inflection: "",
        proficiency: null,
        dialect: [
          { name: "high", proficiency: null },
          { name: "low", proficiency: null },
        ],
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
