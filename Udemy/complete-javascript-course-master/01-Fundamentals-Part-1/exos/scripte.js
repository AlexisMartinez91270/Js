/*//Values & Variables
let country = 'France';
let continent = 'Europe';
let population = 67000000;
console.log(country);
console.log(continent);
console.log(population);

//Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let, const and var
const language = 'french';
const country = 'France';
const continent = 'Europe';
var population = 67;
var isIsland = false;
console.log(isIsland);
isIsland = true;
console.log(isIsland);

//Basic Operators
let half = population / 2;
population++;
console.log(population);
populationF = 6;
console.log(population > populationF);
avPopulation = 33;
console.log(population < avPopulation);
let description1 = country + ' is in ' + continent + ', and its ' + population + ' millions peoples speak ' + language
console.log(description1);

//Strings and Template Literals
let description2 = `${country} is in ${continent}, and its ${population} millions peoples speak ${language}`;
console.log(description2);

//Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
 below average`,
    );
}

//Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//Equality Operators: == vs. ===
const numNeighbours = prompt(
    'How many neighbour countries does your country have?',
);
// LATER : This helps us prevent bugs
const numNeighbours = Number(
    prompt('How many neighbour countries does your country have ? '),
);

if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}

//Logical Operators
if (language === 'english' && population < 50 && !isIsland){
    console.log(`You should live in ${country} :)`);
}
else {
    console.log(`${country} does not meet your criteria :(`);
}

//The switch Statement
const language = 'chinese';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`)
        break;
    case 'spanish':
        console.log('2nd placein number of nativespeakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th mostspoken language');
        break;
    default:
        console.log('Greatlanguage too :D');
}*/

//The Conditional (Ternary) Operator
const country = 'France';
const population = 67;
console.log(population > 33 ? 'true' : 'false');
console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);

