"use strict";
// import d'un objet exporté par défaut
import module1 from "./export-02";
// utilisation de cet objet
module1.do();
// on peut importer un export par défaut sous n'importe quel nom
import module2 from "./export-02";
console.log(module2.data);
