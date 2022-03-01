"use strict";
// le mot clé [let] permet de définir une variable de portée bloc
{
  // la variable [count] n'est connue que dans ce bloc
  let count = 1;
  console.log("count=", count);
}
// ici la variable [count] n'est pas connue
count++;

// le mot clé [const] permet de définir une variable de portée bloc
{
  // la variable [count2] n'est connue que dans ce bloc
  const count2 = 1;
  console.log("count=", count2);
}
// ici la variable [count2] n'est pas connue
count2++;

// le mot clé [var] ne permet pas de définir une variable de portée bloc
{
  // la variable [count3] sera connue globalement
  var count3 = 1;
  console.log("count=", count3);
}
// ici la variable [count3] est connue
count3++;
