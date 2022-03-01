'use strict';
// ceci est un commentaire
// constante
const nom = "dupont";
// un affichage écran
console.log("nom : ", nom);
// un tableau avec des éléments de type différent
const tableau = ["un", "deux", 3, 4];
// son nombre d'éléments
let n = tableau.length;
// une boucle
for (let i = 0; i < n; i++) {
console.log("tableau[", i, "] = ", tableau[i]);
}
// initialisation de 2 variables avec le contenu d'un tableau
let [chaine1, chaine2] = ["chaine1", "chaine2"];
// concaténation des 2 chaînes
const chaine3 = chaine1 + chaine2;
// affichage résultat
console.log([chaine1, chaine2, chaine3]);
// utilisation fonction
affiche(chaine1);
// le type d'une variable peut être connu
afficheType("n", n);
afficheType("chaine1", chaine1);
afficheType("tableau", tableau);
// le type d'une variable peut changer en cours d'exécution
n = "a changé";
afficheType("n", n);
// une fonction peut rendre un résultat
let res1 = f1(4);
console.log("res1=", res1);
// une fonction peut rendre un tableau de valeurs
let res2, res3;
[res1, res2, res3] = f2();
console.log("(res1,res2,res3)=", [res1, res2, res3]);
// on aurait pu récupérer ces valeurs dans un tableau
let t = f2();
for (let i = 0; i < t.length; i++) {
console.log("t[i]=", t[i]);
}
// des tests
for (let i = 0; i < t.length; i++) {
// n'affiche que les chaînes
if (typeof (t[i]) === "string") {
console.log("t[i]=", t[i]);
}
}
// opérateurs de comparaison == et ===
if ("2" == 2) {
console.log("avec l'opérateur ==, la chaîne 2 est égale à l'entier 2");
} else {
console.log("avec l'opérateur ==, la chaîne 2 n'est pas égale à l'entier 2");
}
if ("2" === 2) {
console.log("avec l'opérateur ===, la chaîne 2 est égale à l'entier 2");
} else {
console.log("avec l'opérateur ===, la chaîne 2 n'est pas égale à l'entier 2");
}
// d'autres tests
for (let i = 0; i < t.length; i++) {
// n'affiche que les entiers >10
if (typeof (t[i]) === "number" && Math.floor(t[i]) === t[i] && t[i] > 10) {
console.log("t[i]=", t[i]);
}
}
// une boucle while
t = [8, 5, 0, -2, 3, 4];
let i = 0;
let somme = 0;
while (i < t.length && t[i] > 0) {
console.log("t[i]=", t[i]);
somme += t[i];
i++;
}
console.log("somme=", somme);

// arrêt du programme car il n'y a plus de code exécutable

//affiche
//----------------------------------
function affiche(chaine) {
// affiche chaine
console.log("chaine=", chaine);
}

//afficheType
//----------------------------------
function afficheType(name, variable)// affiche le type de variable
console.log("type[variable ", name, "]=", typeof (variable));
}

//----------------------------------
function f1(param) {
// ajoute 10 à param
return param + 10;
}

//----------------------------------
function f2() {
// rend 3 valeurs
return ["un", 0, 100];
}
