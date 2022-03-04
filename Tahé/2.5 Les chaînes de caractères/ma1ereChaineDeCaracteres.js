"use strict";

// les chaînes de caractères sont en lecture seule (on ne peut pas les modifier)

// une chaîne
const chaîne1 = "abcd ";
// type
console.log("typeof(chaîne1)=", typeof chaîne1);
// caractère n° 2
console.log("chaîne1[2]=", chaîne1[2]);
// provoque une erreur
chaîne1[2] = "0";
