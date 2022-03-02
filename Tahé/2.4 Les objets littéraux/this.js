"use strict";

// un objet peut avoir des propriétés de type [function]
const personne = {
  // propriétés
  prénom: "martin",
  âge: 12,
  père: {
    prénom: "paul",
    âge: 45,
  },
  mère: {
    prénom: "micheline",
    âge: 42,
  },
  // méthode
  toString: function () {
    return JSON.stringify(this);
  },
};

// usage
console.log("personne=", personne);
console.log("personne.toString=", personne.toString());
