"use strict";

// méthode de manipulation de tableaux

// un tableau
const tab = [];
for (let i = 0; i < 10; i++) {
  tab[i] = i * 10;
}
// affichage
console.log("tab=", tab);
// map
const tab2 = tab.map((element) => {
  return { prop1: element, prop2: element * element };
});
// affichage
console.log("tab=", tab);
console.log("tab2=", tab2);
// reduce sans valeur initiale
const somme = tab.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("somme tab=", somme);
// reduce avec valeur initiale
const somme2 = tab.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
console.log("somme2 tab=", somme2);
// filter
const tab4 = tab.filter((element) => {
  if (element > 50) {
    return element;
  }
});
console.log("tab4=", tab4);
// find
const element1 = tab.find((element) => element > 20);
console.log("élément1=", element1);
// findIndex
const index1 = tab.findIndex((element) => element === 20);
console.log("index1 20=", index1);
// indexOf
const index2 = tab.indexOf(30);
console.log("index2 30=", index2);
const index3 = tab.indexOf(31);
console.log("index3 31=", index3);
// lastIndexOf
const index4 = [4, 5, 4, 2].lastIndexOf(4);
console.log("index4 4=", index4);
// sort
const tab5 = [4, 5, 4, 2].sort();
console.log("tab5=", tab5);
// sort inverse
const tab6 = [4, 5, 4, 2].sort((e1, e2) => {
  if (e1 > e2) {
    return -1;
  } else if (e1 === e2) {
    return 0;
  } else {
    return +1;
  }
});
console.log("tab6=", tab6);
