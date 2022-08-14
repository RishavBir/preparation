
                                    // CALLBACK FUNCTION

/* Callback functions are those that passed onto the other function as an argument, which the invoked in that 
 function and do some sort of actions.*/

// Ex>>>> 

const add = (num1, num2) => {
    return (num1 + num2)
}
const calculation = (num1, num2, operator) => {
    return operator(num1, num2)
}
console.log(calculation(2, 3, add))

/* here ADD is the callback function which is passed on calculation function as an argument */

///////////////////////////////////////////////////////////////////////////////////////////////////////////

                                    // HIGHER ORDER FUNCTION

/* Higher order are those function which take other function as an argument and return a function
from it.*/

//EX>>

const add1 = (num1, num2) => {
    return (num1 + num2)
}
const calculation1 = (num1, num2, operator) => {
    return operator(num1, num2)
}
console.log(calculation(4, 4, add1))

/* here CALCULATION function is higher order function cuz it takes another function (add) as an argument.

////////////////////////////////////////////////////////////////////////////////////////////////////////

                                       // CLOSURE

/* Closure give us the access to an outer scope function from inner function */


let namee = "Rishav"

function displayName() {
    console.log(namee)
}
displayName()


/////////////////////////////////////////////////////////////////////////////////////////

                                        // PROMISE

/* promises are those that are use to handle the multiple assychronous functions in nodejs.
They are also use to handle the callback situation*/

//EX 1 >>>> 

function sum(x, y) {
    return new Promise((reject, resolve) => {
        resolve(x + y)
    })
}

sum(10, 20).then((fulfill) => {
    console.log(fulfill)
}).catch((error) => {
    console.log(error)
})

///////////////////////////////////////////////////////////////////////////////////////////////////////

                                        // SetTimeOut()

console.log("start")

setTimeout(() => {
    console.log("second")
})

console.log("third")

//////////////////////////////////////////////////////////////////////////////////////////////////////

                                       // CONSTRUCTOR

/* The constructor() function is basically use to create object and set values for any 
existing object properties 
*/

class Employee {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

let emp = new Employee(12, "Ricky")
console.log(emp.name)


///////////////////////////////////////////////////////////////////////////////////////////////////


                                            // ASYNC and AWAIT

/* The async - await keyword enable asynchronous promise based behavious that can be written in a cleaner way.
avoiding complex promise chain.
--- The await operator is used to wait for the promise.
*/

// EX >>>>

async function Boom() {
    try {
        const fireCrakers = await getFireCrakers()
        const trigger = await setFireCrakers(fireCrakers)
        return trigger()
    }
    catch (error) {
        return "No Enjoyment"
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////

                                            // JWT CREATION

// import jwt from jsonwebtoken

const encData = jwt.sign({name:"Rishav"}, process.env.SECRET)
const decData = jwt.verify(encData, process.env.SECRET)
console.log(encData,decData)


///////////////////////////////////////////////////////////////////////////////////////////////////////

                                            // SHALLOW COPY

// >>>> Here the memory location of the object is copied, not the value of the obj.

// EX>>>> 

let obj = {
    name:"Rishav",
}
let user = {...obj}
user.name = "Cleo"
console.log(obj)   // "Rishav"

                                            // DEEP COPY

//>>> Here it is work for both sinle as well as nested objects

let obj1 = {
    name:"Sumit",
    address:{
        city:"Kolkata"
    }
}

let user1 = JSON.parse(JSON.stringify(obj1))  // we have to covert the obj into string then again in obj
user1.address.city = "Gurgaon"
console.log(obj1)

