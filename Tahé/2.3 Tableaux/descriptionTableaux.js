"use strict";

// tableau
const tab = [];
console.log("tab=", tab, ", longueur=[", tab.length, "]");
console.log("-------------------------------");
// initialisation d'un élément
tab[3] = 100;
tab[1] = "huit";
// tableau
console.log("tab=", tab, ", longueur=[", tab.length, "]");
console.log("-------------------------------");
// toString
console.log("tab.toString=[", tab.toString(), "]");
console.log("-------------------------------");
// les clés du tableau sont ses indices
for (let key of tab.keys()) {
  console.log("clé=[", key, "], valeur=[", tab[key], "]");
}
console.log("-------------------------------");
// les valeurs du tableau
for (let value of tab.values()) {
  console.log("valeur=[", value, "]");
}
