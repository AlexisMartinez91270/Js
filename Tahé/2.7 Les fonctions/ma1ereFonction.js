"use strict";
// mode de passage des paramètres d'une fonction
// -----------------------nombre - passage par valeur
function doSomethingWithNumber(param) {
  param++;
  console.log(
    "[param inside function]=",
    param,
    "[type]=",
    typeof param,
    "[passage par référence]=",
    param === count
  );
}
// code d'appel
let count = 10;
doSomethingWithNumber(count);
console.log("[count outside function]=", count);

// --------------------- chaîne - passage par valeur
function doSomethingWithString(param) {
  param += " xyz";
  console.log(
    "[param inside function]=",
    param,
    "[type]=",
    typeof param,
    "[passage par référence]=",
    param === text
  );
}
// code d'appel
let text = "abcd";
doSomethingWithString(text);
console.log("[text outside function]=", text);

// --------------------- booléen - passage par valeur
function doSomethingWithBoolean(param) {
  param = !param;
  console.log(
    "[param inside function]=",
    param,
    "[type]=",
    typeof param,
    "[passage par référence]=",
    param === bool
  );
}
// code d'appel
let bool = true;
doSomethingWithBoolean(bool);
console.log("bool [outside function]=", bool);

// --------------------- tableau - passage par référence
function doSomethingWithArray(param) {
  param.push(1000);
  console.log(
    "[param inside function]=",
    param,
    "[type]=",
    typeof param,
    "[passage par référence]=",
    param === tab
  );
}
// code d'appel
const tab = [10, 20, 30];
doSomethingWithArray(tab);
console.log("[tab outside function]=", tab);

// --------------------- objet - passage par référence
function doSomethingWithObject(param) {
  param.unePropriétéNouvelle = "xyz";
  console.log(
    "[param inside function]=",
    param,
    "[type]=",
    typeof param,
    "[passage par référence]=",
    param === obj
  );
}
// code d'appel
const obj = [10, 20, 30];
doSomethingWithObject(obj);
console.log("[obj outside function]=", obj);

// --------------------- fonction - passage par référence
function doSomethingWithFunction(param) {
  // une chose plutôt bizarre qui marche pourtant
  param.unePropriétéNouvelle = "xyz";
  console.log(
    "[param inside function]=",
    param,
    "[type]=",
    typeof param,
    "[passage par référence]=",
    param === f
  );
}
// code d'appel
const f = (x) => x + 4;
doSomethingWithFunction(f);
console.log("[f outside function]=", f, f.unePropriétéNouvelle, typeof f);
