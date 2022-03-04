"use strict";

// les paramètres d'une fonction peuvent être de type [fonction]

// fonction f1
function f1(param1, param2) {
  return param1 + param2 + 10;
}
// fonction f2
function f2(param1, param2) {
  return param1 + param2 + 20;
}
// fonction g avec une fonction f en paramètre
function g(param1, param2, f) {
  return f(param1, param2) + 100;
}
// utilisations de g
console.log(g(0, 10, f1));
console.log(g(0, 10, f2));
// le paramètre effectif de type fonction peut être passé en direct - forme 1
console.log(
  g(0, 10, (param1, param2) => {
    return param1 + param2 + 30;
  })
);
// le paramètre effectif de type fonction peut être passé en direct - forme 2
console.log(
  g(0, 10, function (param1, param2) {
    return param1 + param2 + 40;
  })
);
