"use strict";
// un objet vide
const obj1 = {};
// on peut créer dynamiquement les propriétés de l'objet
obj1.prop1 = "abcd";
console.log("obj1=", obj1);
// autre propriété
obj1.prop2 = [1, 2, 3];
console.log("obj1=", obj1);
// autre propriété avec une notation différente
obj1["prop3"] = true;
console.log("obj1=", obj1);
// obj1 est une référence sur l'objet (pointeur), pas l'objet lui-même
const obj2 = obj1;
// obj2 et obj1 pointent sur le même objet
obj2.prop1 = "xyzt";
console.log("obj1=", obj1);
console.log("obj2=", obj2);
// les propriété peuvent être des variables
const var1 = "prop1";
console.log("prop1=", obj1[var1]);
