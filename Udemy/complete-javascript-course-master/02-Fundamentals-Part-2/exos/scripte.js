'use strict';

/*
//Functions
function describeCountry(country, population, capitalCity) {
    const land = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return land;
}

const europe = describeCountry('France', 67, 'Paris');
console.log(europe);

const amerique = describeCountry('USA', 300, 'Washington');
console.log(amerique);

const asie = describeCountry('Japon', 120, 'Tokyo');
console.log(asie);

//Function Declarations vs. Expressions
//Declaration
function percentageOfWorld1(country, population) {
    const percent = (population / 7900) * 100;
    const sentence = `${country} has ${population} million people, so it's about ${percent}% of the world population`
    return sentence;
}

const europe1 = percentageOfWorld1('France', 67);
console.log(europe1);

const amerique1 = percentageOfWorld1('USA', 300);
console.log(amerique1);

const asie1 = percentageOfWorld1('Japon', 120);
console.log(asie1);

//Expression
const percentageOfWorld2 = function (country, population) {
    const percent = (population / 7900) * 100;
    const sentence = `${country} has ${population} million people, so it's about ${percent}% of the world population`
    return sentence;
}

const europe2 = percentageOfWorld2('France', 67);
console.log(europe2);

const amerique2 = percentageOfWorld2('USA', 300);
console.log(amerique2);

const asie2 = percentageOfWorld2('Japon', 120);
console.log(asie2);

//Arrow Functions
const percentageOfWorld3 = (country, population) => {
    const percent = (population / 7900) * 100;
    const sentence = `${country} has ${population} million people, so it's about ${percent}% of the world population`
    return sentence;
}

const europe3 = percentageOfWorld3('France', 67);
console.log(europe3);

const amerique3 = percentageOfWorld3('USA', 300);
console.log(amerique3);

const asie3 = percentageOfWorld3('Japon', 120);
console.log(asie3);
*/

//Functions Calling Other Functions
const percentageOfWorld4 = population => (population / 7900) * 100;

function describePopulation(country, population) {
    const percent = percentageOfWorld4(population)
    const sentence = `${country} has ${population} million people, so it's about ${percent}% of the world population`
    return sentence;
}

/*const europe = describePopulation('France', 67);
console.log(europe);

const amerique = describePopulation('USA', 300);
console.log(amerique);

const asie = describePopulation('Japon', 120);
console.log(asie);

//Arrays
const populations = [67, 300, 120, 80];
console.log(populations.length === 4);

const percentages = [percentageOfWorld4(populations[0]), percentageOfWorld4(populations[1]), percentageOfWorld4(populations[2]), percentageOfWorld4(populations[3])
];
console.log(percentages);

//Introduction to Objects
const myCountry = {
    country: 'France',
    capital: 'Paris',
    language: 'french',
    population: 67,
    neighbours: ['Spain', 'Allemagne', 'Italie', 'Suisse', 'Belgique', 'Luxembourg']
};

//Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry.population -= 2;
console.log(myCountry.population);
*/

//Loop
for (let i = 0; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}