"use strict";

// les chaînes de caractères peuvent être de deux types

// une chaîne littérale
const chaîne1 = "abcd ";
// type
console.log("typeof(chaîne1)=", typeof chaîne1);
// instance de String
const chaîne2 = new String("xyzt");
// type
console.log("typeof(chaîne2)=", typeof chaîne2);
// autre écriture (sans new) – type [string] et non [object]
const chaîne3 = String("12 34");
// type
console.log("typeof(chaîne3)=", typeof chaîne3);
// le type [string] et le type [object] offrent les mêmes méthodes, celles de la classe String
console.log("chaîne1.length=", chaîne1.length);
console.log("chaîne2.length=", chaîne2.length);
