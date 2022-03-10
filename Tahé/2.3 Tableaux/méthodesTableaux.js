"use strict";
// un tableau peut contenir différents types de données
const tab = [1, 2, "un", "deux", true, [10, 20], { prop1: 10, prop2: "abc" }];
// console.log sait afficher le contenu d'un tableau
show(1);
console.log("tab=", tab);
show(2);
// parcours du tableau avec foreach
tab.forEach((element) => {
  console.log("élément=", element, typeof element);
});
show("2b");
// une autre écriture pour faire la même chose
tab.forEach(function (element) {
  console.log("élément=", element, typeof element);
});
show(3);
// parcours du tableau avec for
for (let i = 0; i < tab.length; i++) {
  console.log("élément", i, "= ", tab[i], typeof tab[i]);
}
show(4);
// modification tab[i]
tab[5] = [];
// affichage
console.log("tab=", tab);
show(5);
// on enlève le dernier élément
let element = tab.pop(tab);
console.log("élément=", element, "tab=", tab);
show(6);
// on ajoute un élément à la fin du tableau
tab.push("xyz");
console.log("tab=", tab);
show(7);
// on ajoute un élément au début du tableau
tab.unshift(1000);
console.log("tab=", tab);
show(8);
// on enlève le 1er élément du tableau
element = tab.shift();
console.log("élément=", element, "tab=", tab);
show(9);
// on enlève l'élément n° 2 du tableau
element = tab.splice(2, 1);
console.log("élément=", element, "tab=", tab);
show(10);
// on enlève du tableau deux éléments à partir de l'élément n° 1
element = tab.splice(1, 2);
console.log("élément=", element, "tab=", tab);

// fonction
function show(param) {
  console.log(
    "[",
    param,
    ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ]"
  );
}
