"use strict";
// import d'un objet exporté par défaut
import exportNonNommé from "./exportNonNommé";
// utilisation de cet objet
exportNonNommé.do();
// on peut importer un export par défaut sous n'importe quel nom
import data from "./exportNonNommé";
console.log(data.data);
