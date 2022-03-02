"use strict";

// un objet peut avoir des propriétés de type [function]
let personne = {
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
console.log(personne);
// propriétés
console.log("-----------------------");
for (const key in personne) {
  if (personne.hasOwnProperty(key)) {
    const element = personne[key];
    console.log(key, "=", element);
  }
}
// pour échapper à l'avertissement eslint (1)
console.log("-----------------------");
for (const key in personne) {
  if (Object.prototype.hasOwnProperty.call(personne, key)) {
    const element = personne[key];
    console.log(key, "=", element);
  }
}
// pour échapper à l'avertissement eslint (2)
console.log("-----------------------");
for (const key in personne) {
  // eslint-disable-next-line no-prototype-builtins
  if (personne.hasOwnProperty(key)) {
    const element = personne[key];
    console.log(key, "=", element);
  }
}
