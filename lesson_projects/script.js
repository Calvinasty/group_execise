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
/*


//loops

//For Loop
//for(initialization; condition; increment/decrement)
//how does it work?

/*let end = 10

for (let x = 1; x <= end; x++) {
    console.log(`${x}`)
} console.log(`x is finaly ${end}`)
*/

//while loop
//while (condition)

/*let y = 1

while (y < 5) {
    console.log(`thrill, lets go`)
    //never ending unless y changes so set a condition to break the loop
    y++//condition to break loop based on val of y & the while condition
}*/


//do while loop
// do {
//    block of code
//  } while (condition)

/*let x = 5

do {
    console.log(`${x}`)
    x++;//condition to break the loop
} while (x <= 10)
*/

//Functions
//s3 wop3 s33 woy3 biibi na wonim s3 u'll repeat it often aa create an fx for it. syntax = ;
// function fx_name(parameter(s)) {
//block of code
//}

//now to call it; [fx_name(parameter) ] this will make the bock of code run..., for example

/*function race(number, message) {
    const x = 4
    if (x <= 5) {
        console.log(`${x}`)
    } else { console.log(`bruvado`) }
}
race(`vroom`)//this calls the fx based on the set params. our params make it able to call the fx by using a no or a string(message)
*/

//arrow or anonymos fx
//the syntax is below...
// const functionName = (parameter1, parameter2, ...) => {
// function body
// };
//The => symbol is the arrow syntax that separates the function parameters from the function body. The function body can be a single expression or a block of statements enclosed in curly braces.
//example
/*const sum = (a, b) => a + b; //the fx this o, now to call,
let result = sum(5, 8)
console.log(`${result}`)
*/