"use strict";

// package moment
import moment from "moment";

// principe du try / catch / finally
for (let i = 0; i < 10; i++) {
  // date - heure du moment courant
  const now = Date.now();
  // formatage heure pour avoir les millisecondes
  const time = moment(now).format("HH:mm:ss:SSS");
  // les millisecondes
  const milli = Number(time.substr(time.length - 3));
  // affichage
  console.log("--------------------itération n° ", i, "à", time);
  try {
    // nbre variant selon l’heure du moment
    const nbre = milli % 2;
    if (nbre === 0) {
      // lancer un msg d'erreur
      throw "erreur";
    }
    // si on arrive ici c'est qu'il n'y a pas eu d'erreur
    console.log("pas d'erreur");
  } catch (error) {
    // si on arrive ici, c'est qu'il y a eu erreur
    console.log("erreur1=", error);
  } finally {
    // exécuté dans tous les cas erreur ou pas
    console.log("finally");
  }
}
