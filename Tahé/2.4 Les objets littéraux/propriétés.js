"use strict";
// un objet à plusieurs niveaux
const personne = {
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
};
// accès aux propriétés
console.log("prénom personne=", personne.prénom);
console.log("prénom mère=", personne.mère.prénom);
personne.mère.âge = 40;
console.log("âge mère=", personne.mère.âge);
// console.log sait afficher des objets
console.log("personne=", personne);
console.log("mère=", personne.mère);
// on peut aussi afficher la chaîne jSON de l'objet
let json = JSON.stringify(personne);
console.log("jSON=", json);
// on peut relire le jSON
let personne2 = JSON.parse(json);
console.log("père=", personne2.père);
