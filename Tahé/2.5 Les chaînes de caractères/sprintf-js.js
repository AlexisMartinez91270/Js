"use strict";
// utilisation d'un package externe pour disposer de la fonction sprintf
import { sprintf } from "sprintf-js";
// chaine
const chaîne = "Introduction à Javascript par l'exemple";
// méthode
console.log(sprintf("[%s].substr(3,2)=[%s]", chaîne, chaîne.substr(3, 2)));
