"use strict";

// clônage d'objets
const obj1 = {
  nom: "martin",
  prénom: "jean",
};

// clône (copie) de obj1 avec l'opérateur de spread
const obj2 = { ...obj1 };

// vérifications
// obj2 pointe sur une copie de obj1
console.log("obj2===obj1 :", obj1 === obj2);
console.log("obj2=", obj2);
