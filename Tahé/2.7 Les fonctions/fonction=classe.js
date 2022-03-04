"use strict";
// une fonction peut être utilisée comme un objet

// une coquille vide
function f() {}
// à qui on attribue des propriétés de l'extérieur
f.prop1 = "val1";
f.show = function () {
  console.log(this.prop1);
};
// utilisation de f
f.show();

// une fonction g fonctionnant comme une classe
function g() {
  this.prop2 = "val2";
  this.show = function () {
    console.log(this.prop2);
  };
}
// instanciation de la fonction avec [new]
new g().show();
