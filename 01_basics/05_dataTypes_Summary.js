// Data Types
//1. Primitive Data Type
//2. Non-primitive or Reference data type
//All primitve data type are "call by value"
//7 primitive data type: String, Number, Boolean, null, undefined, Symbol, BigInt
//Reference Type(Non-primitive): Array, Objects
// Js is dynamically tpyed language, it means variable is determined at rumtime, not a compile time
//we don't need to explicitly declare the type of variable at the time of execution, type of variable canc change during execution

//Defining symbol
const id = Symbol("123")
const id2 = Symbol("123")
// both id and id2 are differnt values
console.log(id, id2)
console.log(id === id2)
const bigNumber = 4235345253453245433214n  // it became BIgInt
console.log(bigNumber)

//Array
const heros = ["Shaktiman", "nagraj", "doga"]
//Objects
let Obj = {
    name: "ishu",
    age: 22,
}
//Functions
const myFunction  = function(){
    console.log("Hello")
}

// finding dataa type of value
console.log(typeof heros)
console.log(typeof Obj)
let y = null
console.log(typeof(y))
console.log(typeof myFunction)
//All reference data type type id object 
//jitne bhi non-primitive ka data type function hi bola jata hai and functions ka specifically fucntion object aata hai
//Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//two types of memory
//Stack(Primitive) an Heap(Reference)
//jab bhi stac kmemory use hoti hai, jo bhi variable use kiya uska ek copy milta hai.
//jab memory heap me define hoti hai, vha se milta hai reference original value ka

let myYouTubeName = "Ishu Pal"
let anotherName = myYouTubeName
console.log("anotherName: ", anotherName, "myYouTubeName: ", myYouTubeName)
anotherName = "Chai and Coffee"
console.log("anotherName: ",anotherName, "myYouTubeName: ", myYouTubeName)

let userOne = {
    email: "user@gmail.com",
    upi: "use@ycl" 
}

let userTwo = userOne
console.log("userOne", userOne, "userTwo", userTwo)
userTwo.email = "kind@gmail.com"
console.log("userOne", userOne, "userTwo", userTwo)