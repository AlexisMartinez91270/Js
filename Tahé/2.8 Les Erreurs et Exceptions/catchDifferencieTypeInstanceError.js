"use strict";

// package moment
import moment from "moment";

// différencier l'instance d'Error reçue dans un [catch]
for (let i = 0; i < 10; i++) {
  // date - heure du moment courant
  const now = Date.now();
  // formatage heure pour avoir les millisecondes
  const time = moment(now).format("HH:mm:ss:SSS");
  // les millisecondes
  const milli = Number(time.substr(time.length - 3));
  console.log("--------------------itération n° ", i);
  try {
    // nbre [0, 1, 2]
    const nbre = milli % 3;
    switch (nbre) {
      case 0:
        throw new ReferenceError("erreur 1");
      case 1:
        throw new RangeError("erreur 2");
      default:
        throw new EvalError("erreur 3");
    }
  } catch (error) {
    // il y a eu erreur
    if (error instanceof ReferenceError) {
      console.log("ReferenceError :", error.message);
    } else {
      if (error instanceof RangeError) {
        console.log("RangeError :", error.message);
      } else {
        if (error instanceof EvalError) {
          console.log("EvalError :", error.message);
        }
      }
    }
  }
}
