// Coding Challenge #1
const massM = 78;
const heightM = 1.69;
const massJ = 92;
const heightJ = 1.95;

const BMIM = massM / heightM ** 2;
const BMIJ = massJ / heightJ ** 2;

const markHigherBMI = BMIM > BMIJ;

console.log(markHigherBMI);

// Coding Challenge #2
if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIM}) is higher than John's (${BMIJ})!`);
} else {
  console.log(`John's BMI (${BMIJ}) is higher than Mark's (${BMIM})!`);
}

// Coding Challenge #3
const scroresD = [96, 108, 89];
const scroresK = [88, 91, 110];
let cumulScroreD = 0;
let cumulScroreK = 0;
let avScroreD = 0;
let avScroreK = 0;

for (let i = 0; i < scroresD.length; i++) {
  cumulScroreD += scroresD[i];
}
avScroreD = cumulScroreD / scroresD.length;
for (let i = 0; i < scroresK.length; i++) {
  cumulScroreK += scroresK[i];
}
avScroreK = cumulScroreK / scroresK.length;

if (avScroreD >= 100 || avScroreK >= 100) {
  if (avScroreD > avScroreK) {
    console.log("Dolphins wins!! ;)");
  } else if (avScroreK > avScroreD) {
    console.log("Koalas wins!! ;)");
  } else {
    console.log("It's a draw! :|");
  }
} else {
  console.log("Personne n'a gagné :(");
}

// Coding Challenge #4
const bill = 40;
let totalValue = 0;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

totalValue = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);
