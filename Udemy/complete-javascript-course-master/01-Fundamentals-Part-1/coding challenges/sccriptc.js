/*
//Challenge #1
//Test 1
const massM = 78;
const heightM = 1.69;
const massJ = 92;
const heightJ = 1.95;
const bmiM = massM / heightM ** 2;
const bmiJ = massJ / heightJ ** 2;
console.log(bmiM, bmiJ)
const markHigherBMI = bmiM > bmiJ;
console.log(markHigherBMI);

//Test 2
const massM = 95;
const heightM = 1.88;
const massJ = 85;
const heightJ = 1.76;
const bmiM = massM / heightM ** 2;
const bmiJ = massJ / heightJ ** 2;
console.log(bmiM, bmiJ)
const markHigherBMI = bmiM > bmiJ;
console.log(markHigherBMI);

//Challenge #2
if (markHigherBMI === true) {
    console.log(`Mark's BMI is higher than John's!`)
    console.log(`Mark's
    BMI (${bmiM}) is higher than John's (${bmiJ})!`)
}
else {
    console.log(`John's BMI is higher than Mark's`)
    console.log(`John's
    BMI (${bmiM}) is higher than Mark's (${bmiJ})!`)
}

//Challenge #3
//#1
const avScoreD = (96 + 108 + 89) / 3;
const avScoreK = (88 + 91 + 110) / 3;
console.log(avScoreD, avScoreK)

if (avScoreD > avScoreK) {
    console.log(`Dolphins wins !!`);
}
else if (avScoreK > avScoreD) {
    console.log(`Koalas wins !!`);
}
else {
    console.log(`Its a draw !`);
}
//Bonus 1
const avScoreD = (97 + 112 + 101) / 3;
const avScoreK = (109 + 95 + 123) / 3;
console.log(avScoreD, avScoreK)

if (avScoreD > avScoreK && avScoreD >= 100) {
    console.log(`Dolphins wins !!`);
}
else if (avScoreK > avScoreD && avScoreK >= 100) {
    console.log(`Koalas wins !!`);
}
else {
    console.log(`Its a draw !`);
}
//Bonus 2
const avScoreD = (97 + 112 + 101) / 3;
const avScoreK = (109 + 95 + 106) / 3;
console.log(avScoreD, avScoreK)

if (avScoreD > avScoreK && avScoreD >= 100) {
    console.log(`Dolphins wins !!`);
}
else if (avScoreK > avScoreD && avScoreK >= 100) {
    console.log(`Koalas wins !!`);
}
else if (avScoreD === avScoreK && avScoreD >= 100) {
    console.log(`Its a draw !`);
}
else {
    console.log(`Everyone loose !`);
}
*/

//Challenge 4
const price = 280;
const tip = price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;
console.log(`Price is ${price}, the tip is ${tip}, and the total is ${price + tip}`)
