"use strict";
// on peut affecter une fonction à une variable
const variable1 = function (a, b) {
  return a + b;
};
console.log("typeof(variable1)=", typeof variable1);
// la variable peut ensuite s'utiliser comme une fonction
console.log("variable1(10,12)=", variable1(10, 12));
// la définition de la fonction peut se faire avec la notation =>
const variable2 = (a, b, c) => {
  return a - b + c;
};
console.log("variable2(10,12,14)=", variable2(10, 12, 14));
// on peut ne pas mettre les accolades s'il n'y a qu'une expression dans le code de la fonction
// cette expression est alors la valeur de retour de la fonction
const variable3 = (a, b, c) => a + b + c;
console.log("variable3(10,12,14)=", variable3(10, 12, 14));
