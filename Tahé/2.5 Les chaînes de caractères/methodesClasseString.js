"use strict";
// utilisation d'un package externe pour disposer de la fonction sprintf
import { sprintf } from "sprintf-js";
// chaine
const chaîne = " Introduction à Javascript ";
// quelques méthodes
// substr(10,2) : 2 caractères à partir du n° 10
console.log(sprintf("[%s].substr(10,2)=[%s]", chaîne, chaîne.substr(10, 2)));
// trim : élimination des blancs de début et fin de chaîne (blanc=\b \t \r \n \f)
console.log(sprintf("[%s].trim()=[%s]", chaîne, chaîne.trim()));
// toLowerCase : transformation en minuscules
console.log(sprintf("[%s].toLowerCase=[%s]", chaîne, chaîne.toLowerCase()));
// toUpperCase : transformation en majuscules
console.log(sprintf("[%s].toUpperCase=[%s]", chaîne, chaîne.toUpperCase()));
// indexOf : position d'une chaîne cherchée dans la chaîne, -1 si la sous-chaîne n'existe pas
console.log(
  sprintf("[%s].indexOf('Java')=[%s]", chaîne, chaîne.indexOf("Java"))
);
console.log(
  sprintf("[%s].trim().indexOf('abcd')=[%s]", chaîne, chaîne.indexOf("abcd"))
);
// includes : vrai si la chaîne cherchée est dans la chaîne
console.log(
  sprintf("[%s].includes('Java')=[%s]", chaîne, chaîne.includes("Java"))
);
// length : longueur de la chaîne - n'est pas une méthode mais une propriété
console.log(sprintf("[%s].length=[%s]", chaîne, chaîne.length));
// slice (7,10) : chaînes des caractères n° 7 à 9
console.log(sprintf("[%s].slice(7,10)=[%s]", chaîne, chaîne.slice(7, 10)));
// match : cherche une expression dans la chaîne - cette expression peut être une expression régulière
// /intro/i : expression régulière désignant la chaîne [intro] en majuscules ou minuscules
// rend la chaîne trouvée
console.log(
  sprintf("[%s].match(/intro/i)=[%s]", chaîne, chaîne.match(/intro/i))
);
// replace : remplace chaine1 par chaine2 dans chaîne
// remplace la 1ère occurrence de i par x
console.log(
  sprintf("[%s].replace('i','x')=[%s]", chaîne, chaîne.replace("i", "x"))
);
// remplace toutes les occurrences de i par x
// /i/g est une expression régulière désignant toutes (g) les occurrences de i
console.log(
  sprintf("[%s].replace(/i/g,'x')=[%s]", chaîne, chaîne.replace(/i/g, "x"))
);
// split : divise la chaîne en mots séparés par le paramètre de split
// rend le tableau de ces mots
// /\s*/ : mots séparés par 0 ou plusieurs espaces
console.log(sprintf("[%s].split(/\\s*/)=[%s]", chaîne, chaîne.split(/\s*/)));
// /\s+/ : mots séparés par un ou plusieurs espaces
console.log(sprintf("[%s].split(/\\s+/)=[%s]", chaîne, chaîne.split(/\s+/)));
