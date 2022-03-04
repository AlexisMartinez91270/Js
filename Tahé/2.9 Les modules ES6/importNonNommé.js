"use strict";
// import d'un objet exporté par défaut
import export01 from "./export-01";
// utilisation de cet objet
export01.do();
// on peut importer un export par défaut sous n'importe quel nom
import data from "./export-01";
console.log(data.data);
