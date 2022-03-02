"use strict";
// déstructuration

// littéraux
const obj1 = {
  nom: "martin",
  prénom: "jean",
};

// déstructuration obj1 dans variables [n,p]
const { nom: n, prénom: p } = obj1;
console.log("n=", n, "p=", p);

// déstructuration obj1 dans variables [n2,p2]
function f({ nom: n2, prénom: p2 }) {
  console.log("f-n2=", n2, "f-p2=", p2);
}
f(obj1);

// déstructuration obj1 dans variables [nom,prénom]
function g({ nom: nom, prénom: prénom }) {
  console.log("g-nom=", nom, "g-prénom=", prénom);
}
g(obj1);

// déstructuration obj1 dans variables [nom,prénom]
// avec notation raccourcie équivalente à h({nom:nom,prénom:prénom})
function h({ nom, prénom }) {
  console.log("h-nom=", nom, "h-prénom=", prénom);
}
h(obj1);
