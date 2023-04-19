'use strict'

//Functions
//s3 wop3 s33 woy3 biibi na wonim s3 u'll repeat it often aa create an fx for it. syntax = ;
// function fx_name(parameter(s)) {
//block of code
//}

//now to call it; [fx_name(parameter) ] this will make the bock of code run..., for example

function race() {
    const x = 7
    if (x <= 5) {
        console.log(`${x}`)
    } else { console.log(`bruvado`) }
}
race()//this calls the fx based on the set params. our params make it able to call the fx by using a no or a string(message)

//real lyfe example
function juiceMixer(apple, orange) {
    console.log(apple, orange)
    const juice = `juice with ${apple} apples ${orange} oranges.`
    return juice
}

const cocktail = juiceMixer(2, 3)
console.log(cocktail)


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



//classes
//a class is the bluebrint of an object
//format class student {
//            constructor(var(s) eg.name)
//} (to set or get place this in.... [this.var(name) = var(name)])
//then  use the `new` to apply class i.e let X = new student(`Ken`)
// this means we've ref'd x to the class student and his var (name) is Ken
//could be that it uses a constructor or not. However even with no constructor by default it has an empty constructor.
//example
/* const year = 2023 //var to calc age
const moment = require('moment'); // Install moment.js (npm install moment) library also to aid age calculation
class student {
    constructor(name, mom, dob, grade) {
        name = undefined
        mom = undefined
        dob = undefined
        grade = undefined
    }
    //now to apply these 3 items for an object that will use this class  use the 'set'.
    //so create a set for each thing in the class

    setName(newValue) {
        this.name = newValue
    }

    setMom(newValue) {
        this.mom = newValue
    }

    setDob(newValue) {
        this.dob = moment(newValue, 'YYYY-MM-DD') //to pass date string using moment.js for date calculation
    }

    setGrade(newValue) {
        this.grade = newValue
    }

    //This get here is used tho get the items we created with setters.

    getName() {
        return this.name
    } //to show/call name

    getMom() {
        return this.mom
    } //to show mom

    getDob() {
        const ageInYears = year - this.dob.year(); // Calculate age based on year constant and year of birth
        const formattedDate = this.dob.format('MMMM Do, YYYY'); // Format date using moment.js
        return `${formattedDate} (${ageInYears} years old)`;
    } //to show dob and calculate age

    getGrade() {
        return this.grade
    } //to show grade

}


//finaly create stuff to apply yur class (i.e student)
let Ben = new student() //so now ben here is new and so if u console log him he's undefined
console.log(Ben) //this will return an empty somthing.
//tu set name for ben call setname
Ben.setName(`Benjamin`)//now if we log we shld see his name
console.log(Ben) //and that's exactly what happend
//so set his other details too na y3nkc....
Ben.setMom(`Akosua`)
Ben.setDob(`2011-11-11`)
Ben.setGrade(`grade 8`)
console.log(Ben)//to show all about ben
console.log(Ben.getDob())//to show only his age
*/


//PROMISES & Callbacks
//an object whose block wont be retrieved now but will be referred by a call back
//a call back is a method passed in as an argument of another function
//lets write a method that returns a promise
/*function makeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`api return response`)
            //reject(`api did not return right response`)
            //we need only one of these 2 so if it comes use res and //rej and vice versa
        }, 5000)//5 secs timeout before callback
    })
} //so this is the fx we created, we r making an api call
//if we create something to run based on the fx above after the timeout or delay thats is a callback promise, wahy3 bc s3 after 5 secs cb3san afr3 api no biom. so we must create somthing to dispaly afterwarda to actually know if the callback happend.....

makeApiCall()
    .then((result) => {
        console.log(result)
        return result;//so this block will log the origional result
    })
    .then((result) => {
        console.log(result.toUpperCase())
        return result//then this will log the result in capital letter
    })
    .then((result) => console.log(result.toLowerCase()))//then this will log r in sml letrs

    .catch((e) => console.log(e))//in case an error is thrown from the execution this catch block no b3kye no then will handle it, so here we set it to log the error code(i.e (e))
    .finally(() => {
        console.log('everything is okay, api call ended')
    })//this specifies the final code to execute.
*/
