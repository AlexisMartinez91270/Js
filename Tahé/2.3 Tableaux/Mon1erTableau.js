"use strict";

// un tableau est un objet manipulé via son adresse
const tab1 = [1, 2, 3];
// copie d'adresses
const tab2 = tab1;
// tab1 et tab2 pointent sur le même tableau
console.log("tab1===tab2 :", tab1 === tab2);
// on peut modifier le tableau en passant indifféremment par tab1 ou tab2
tab2[1] = 10;
console.log("tab1=", tab1);
console.log("tab2=", tab2);
