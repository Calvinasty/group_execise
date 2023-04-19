/*let js = "amazing";
console.log(34 - 75 + 89);
console.log(js)*/

/*let now = 2023
let myAge = now - 2004
let herAge = now - 2000
console.log(myAge)
console.log(herAge + myAge)
const avgAge = herAge + myAge / 2
console.log(avgAge)*/

/*const mBmia = 78 / (1.69 * 1.69)
const jBmia = 92 / (1.95 * 1.95)
console.log(mBmia, jBmia)
if (mBmia < jBmia) {
    console.log(`Mark has a lower bmi`)
} else {
    console.log(`John has a lower bmi`)
}*/


/*const mBmib = 95 / (1.88 ** 2)
const jBmib = 85 / (1.76 ** 2)
console.log(mBmib, jBmib)
if (mBmib < jBmib) {
    console.log(`Mark has a lower bmi`)
} else {
    console.log(`John has a lower bmi`)
}*/

/*const hasDrLc = true
const hasGdVs = true
const isTired = true
console.log(hasDrLc && hasGdVs);
console.log(hasDrLc || hasGdVs);
console.log(!hasGdVs);*/

/*if (hasDrLc && hasGdVs && !isTired) {
    console.log(`sara fi drive`)
} else {
    console.log(`sara no go drive`)
}
 let favNum = Number(prompt(`what's yo fave number dude?`))

if (favNum === 24) {
    console.log(`that's lit dawg it's mine too`)
} else if (favNum > 50) {
    console.log(`keep it below 50 dawg`)
} else {
    console.log(`cool don ${favNum} is a vibe`)
}*/

/*const Dolphins = ((97 + 112 + 101) / 3).toFixed(2);
const Koalas = ((109 + 95 + 106) / 3).toFixed(2);
console.log(`At the end of the first round, The Dolphins had ${Dolphins} points and The Koalas had ${Koalas} points`)

if (Koalas > Dolphins && Koalas >= 100) {
    console.log(`The Koalas Win the Trophy 🏆 By ${Koalas} points`)
} else if (Dolphins > Koalas && Dolphins >= 100) {
    console.log(`The Dolphins win the Trophy 🏆 by ${Dolphins} points`)
} else if (Koalas === Dolphins && Koalas >= 100 && Dolphins >= 100) {
    console.log(`Laidies and Gentlemen we have a tie`)
}
else if (Koalas > Dolphins && Koalas < 100) {
    console.log(`The Koalas Win the Trophy 🏆 By ${Koalas} points, but they still did not meet the average of 100 point`)
} else if (Dolphins > Koalas && Dolphins < 100) {
    console.log(`The Dolphins win the Trophy 🏆 by ${Dolphins} points , but they still did not meet the average of 100 point`)
} else if (Koalas === Dolphins && Koalas < 100 && Dolphins < 100) {
    console.log(`Laidies and Gentlemen we have a tie, but they both did not meet the average of 100 point`)
}
*/

//even and odd using modulo method
//% = modulo in js
/*let x = 7
if (x % 2 === 0) {
    console.log(`wei way3 even`)
} else {
    console.log(`fuck it`)
}*/




//switch
/*const day = `friday`

switch (day) {
    case `monday`:
        console.log(`frst day in class, did pretty much notthing`)
        break;
    case `tuesday`:
        console.log(`nkaedi da no`)
        break;
    case `wenzday`:

    default:
        console.log(`i was tired typing`)
}//without the break, the code will continue executing even if it's a dy.dx case plus its purporsly for equality so comparisms y3 ly bi, it uses ===
*/

//The conditional/ turnery operator(? :)
/*let age = 19
age >= 18 ? console.log(`m3nom bear`) : console.log(`ma me nsuo wae`)
//can be stored as a variable since it retrurns a result and is der4 an xpresion
*/

//code xx
const bill = 300
let tipA = (15 * bill) / 100
let tipB = (20 * bill) / 100
let totalA = bill + tipA
let totalB = bill + tipB

if (bill >= 50 && bill <= 300) {
    console.log(`Your Bill is: ${bill} USD, and you tipped the waiter: ${tipA} USD.`)
    console.log(`The total is ${totalA} USD.`)
} else if (bill > 300) {
    console.log(`Your Bill is: ${bill} USD, and you tipped the waiter: ${tipB} USD.`)
    console.log(`The total is ${totalB} USD.`)
} else {
    console.log(`Your Bill is: ${bill} USD`)
}

