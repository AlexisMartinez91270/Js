"use strict";
// getters et setters d'un objet
const personne = {
  // getter
  get nom() {
    console.log("getter nom");
    return this._nom;
  },
  // setter
  set nom(unNom) {
    console.log("setter nom");
    this._nom = unNom;
  },
};
// setter
personne.nom = "Hercule";
// getter
console.log(personne.nom);
// l'objet lui-même
console.log("personne=", personne);
// ça n'empêche pas d'accéder à la propriété [_nom] directement
personne._nom = "xyz";
console.log("personne=", personne);
