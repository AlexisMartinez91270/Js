"use strict";
// getters et setters d'un objet
const personne = {
  // getter
  get Nom() {
    console.log("getter nom");
    return this.nom;
  },
  // setter
  set Nom(unNom) {
    console.log("setter nom");
    this.nom = [unNom, 2 + unNom];
  },
};
// setter
personne.Nom = "Hercule";
// getter
console.log(personne.Nom);
// l'objet lui-même
console.log("personne=", personne);
// ça n'empêche pas d'accéder à la propriété [_nom] directement
personne.nom = "xyz";
console.log("personne=", personne);
