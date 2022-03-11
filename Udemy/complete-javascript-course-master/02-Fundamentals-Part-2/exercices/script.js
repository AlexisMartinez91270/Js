"use strict";

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const france = ["France", 67, "Paris"];
const algeria = ["Algeria", 43, "Alger"];
const japan = ["Japan", 125, "Tokyo"];

const descFrance = describeCountry(france[0], france[1], france[2]);
const descJapan = describeCountry(japan[0], japan[1], japan[2]);
const descAlgeria = describeCountry(algeria[0], algeria[1], algeria[2]);

console.log(descFrance);
console.log(descJapan);
console.log(descAlgeria);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return population / 79;
}

const percentFrance1 = `${percentageOfWorld1(france[1])}%`;
const percentJapan1 = `${percentageOfWorld1(japan[1])}%`;
const percentAlgeria1 = `${percentageOfWorld1(algeria[1])}%`;

console.log(percentFrance1, percentJapan1, percentAlgeria1);

const percentageOfWorld2 = function (population) {
  return population / 79;
};

const percentFrance2 = `${percentageOfWorld2(france[1])}%`;
const percentJapan2 = `${percentageOfWorld2(japan[1])}%`;
const percentAlgeria2 = `${percentageOfWorld2(algeria[1])}%`;

console.log(percentFrance2, percentJapan2, percentAlgeria2);

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => population / 79;

const percentFrance3 = `${percentageOfWorld3(france[1])}%`;
const percentJapan3 = `${percentageOfWorld3(japan[1])}%`;
const percentAlgeria3 = `${percentageOfWorld3(algeria[1])}%`;

console.log(percentFrance3, percentJapan3, percentAlgeria3);

// LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people which is about ${percentage}% of the world`;
  return description;
}

const descPopFrance = describePopulation(france[0], france[1]);
const descPopJapan = describePopulation(japan[0], japan[1]);
const descPopAlgeria = describePopulation(algeria[0], algeria[1]);

console.log(descPopFrance);
console.log(descPopJapan);
console.log(descPopAlgeria);

// LECTURE: Introduction to Arrays
const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Norway", "Sweden", "Russia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
  country: "France",
  capital: "Paris",
  language: "french",
  population: 67,
  neighbours: ["Spain", "Germany", "Suisse", "Italia"],
  //LECTURE: Object Methods
  checkIsIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
myCountry["population"] -= 2;

// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
const populationsBis = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populationsBis.length; i++) {
  const perc = percentageOfWorld1(populationsBis[i]);
  percentages2.push(perc);
}
console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// LECTURE: The while Loop
const percentages3 = [];
let i = 0;
while (i < populationsBis.length) {
  const perc = percentageOfWorld1(populationsBis[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
