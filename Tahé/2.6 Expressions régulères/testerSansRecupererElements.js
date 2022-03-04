"use strict";

/// expressions régulières en javascript
// récupérer les différents champs d'une chaîne
// le modèle : une suite de chiffres entourée de caractères quelconques
// on ne veut récupérer que la suite de chiffres
let modèle = /\d+/;
console.log("type d'une expression régulière : ", typeof modèle);
// on confronte la chaîne au modèle
compareModèleToChaîne(modèle, "xyz1234abcd");
compareModèleToChaîne(modèle, "12 34");
compareModèleToChaîne(modèle, "abcd");

// le modèle : une suite de chiffres entourée de caractères quelconques
// on veut la suite de chiffres ainsi que les champs qui suivent et précèdent
modèle = /^.*?\d+.*?$/;
// on confronte la chaîne au modèle
compareModèleToChaîne(modèle, "xyz1234abcd");
compareModèleToChaîne(modèle, "12 34");
compareModèleToChaîne(modèle, "abcd");

// le modèle - une date au format jj/mm/aa
modèle = /^\s*\d\d\/\d\d\/\d\d\s*$/;
compareModèleToChaîne(modèle, "10/05/97");
compareModèleToChaîne(modèle, " 04/04/01 ");
compareModèleToChaîne(modèle, "5/1/01");

// le modèle - un nombre décimal
modèle = /^\s*[+|-]?\s*\d+\.\d*|\.\d+|\d+\s*$/;
compareModèleToChaîne(modèle, "187.8");
compareModèleToChaîne(modèle, "-0.6");
compareModèleToChaîne(modèle, "4");
compareModèleToChaîne(modèle, ".6");
compareModèleToChaîne(modèle, "4.");
compareModèleToChaîne(modèle, " + 4");

// --------------------------------------------------------------------------
function compareModèleToChaîne(modèle, chaîne) {
  // test
  const correspond = modèle.test(chaîne);
  // compare la chaîne [chaîne] au modèle [modèle]
  console.log(
    `----------- chaîne=${chaîne}, modèle=${modèle}, correspond=${correspond}`
  );
}
