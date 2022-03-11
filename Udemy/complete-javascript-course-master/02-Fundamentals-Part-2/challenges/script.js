"use strict";

//Challenge #1
// Data 1
const scroreD1 = 44 + 23 + 71;
const scroreK1 = 65 + 54 + 49;

// Data 2
const scroreD2 = 85 + 54 + 41;
const scroreK2 = 23 + 34 + 27;

// Fonction calcAverage
const calcAverage = (scores) => scores / 3;

// Fonction checkWinner
function checkWinner(avg1, avg2) {
  if (avg1 >= 2 * avg2) {
    return `Dolphins win (${avg1} vs. ${avg2}) ;)`;
  } else if (avg2 >= 2 * avg1) {
    return `Koalas win (${avg2} vs. ${avg1}) ;)`;
  } else {
    return "Nobody win :(";
  }
}

// Result Data 1
const avgD1 = calcAverage(scroreD1);
const avgK1 = calcAverage(scroreK1);

console.log(`Data 1 : ${checkWinner(avgD1, avgK1)}`);

// Result Data 2
const avgD2 = calcAverage(scroreD2);
const avgK2 = calcAverage(scroreK2);

console.log(`Data 2 : ${checkWinner(avgD2, avgK2)}`);

//Challenge #2
//Data
const bills = [125, 555, 44];

function calcTip(bill) {
  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return tip;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, totals);

// Challenge #3
// Data
const people1 = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const people2 = {
  firstName: "Jhon",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// Fonction higherBMI
function whoHaveHigherBMI(people1, people2) {
  let resume;
  if (people1.bmi > people2.bmi) {
    resume = `${people1.firstName}'s BMI (${people1.bmi}) is higher than ${people2.firstName}'s (${people2.bmi})`;
  } else {
    resume = `${people2.firstName}'s BMI (${people2.bmi}) is higher than ${people1.firstName}'s (${people1.bmi})`;
  }
  return resume;
}

// Calcul BMI
people1.calcBMI();
people2.calcBMI();

// Affiche résultat
console.log(whoHaveHigherBMI(people1, people2));

// Challenge #4
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  tips2[i] = calcTip(bills2[i]);
  totals2[i] = tips2[i] + bills2[i];
}

console.log(bills2, tips2, totals2);

function calcAverage2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  const average = sum / arr.length;
  return average;
}

const avgBills = calcAverage2(bills2);
const avgTips = calcAverage2(tips2);
const avgTotals = calcAverage2(totals2);

console.log(avgBills, avgTips, avgTotals);
