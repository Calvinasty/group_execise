let js = "amazing";
console.log(34 - 75 + 89);
console.log(js)

let now = 2023
let myAge = now - 2004
let herAge = now - 2000
console.log(myAge)
console.log(herAge + myAge)
const avgAge = herAge + myAge / 2
console.log(avgAge)

const mBmia = 78 / (1.69 * 1.69)
const jBmia = 92 / (1.95 * 1.95)
console.log(mBmia, jBmia)
if (mBmia < jBmia) {
    console.log(`Mark has a lower bmi`)
}else {console.log(`John has a lower bmi`)
}


const mBmib = 95 / (1.88 ** 2)
const jBmib = 85 / (1.76 ** 2)
console.log(mBmib, jBmib)
if (mBmib < jBmib) {
    console.log(`Mark has a lower bmi`)
}else {
    console.log(`John has a lower bmi`)
}

console.log(`I am 23 years old`)

const hasDrLc = true
const hasGdVs = true
const isTired = true
console.log(hasDrLc && hasGdVs);
console.log(hasDrLc || hasGdVs);
console.log(!hasGdVs);

if (hasDrLc && hasGdVs && !isTired) {
    console.log(`sara fi drive`)
} else {
    console.log(`sara no go drive`)
}