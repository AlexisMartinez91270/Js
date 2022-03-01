'use strict';

/*//Challenge 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log(`Nobody win, it's a draws`);
    }
}
checkWinner(avgDolphins, avgKoalas);

//Data2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas && avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgDolphins && avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log(`Nobody win, it's a draws`);
    }
}
checkWinner(avgDolphins2, avgKoalas2);

//Challenge 2
const calcTip = price =>
    price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;

const prices = [125, 555, 44];
const tips = [
    calcTip(prices[0]), calcTip(prices[1]), calcTip(prices[2])
];
const total = [
    prices[0] + tips[0], prices[1] + tips[1], prices[2] + tips[2]
];
console.log(prices);
console.log(tips);
console.log(total);


//Challenge 3
const people1 = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const people2 = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

people1.calcBMI();
people2.calcBMI();

if (people2.bmi > people1.bmi) {
    console.log(`${people2.firstName}'s BMI(${people2.bmi}) is higher than ${people1.firstName}'s (${people1.bmi})!`)
}
else if (people1.bmi > people2.bmi) {
    console.log(`${people1.firstName}'s BMI(${people1.bmi}) is higher than ${people2.firstName}'s (${people2.bmi})!`)
}
else {
    console.log(`${people1.firstName} and ${people2.firstName} have the same BMI(${people1.bmi})`);
}
*/

//Challenge 4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));