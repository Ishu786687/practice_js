let score = null
console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)   //to convert value to number
console.log(typeof(valueInNumber))
console.log(valueInNumber)          //it will give output Nan because we are trying to convert 33abc to number. 
// null will get converted to 0. undefined will get converted to NaN. bolean true: 1, false: 1.

let isLoggedIn = "ishu"
let booleanIsLoggedIn =  Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// ""  -> false
// "ishu" -> true
// 1 -> true
// 0 -> false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//**************OPERATIONS****************//

let value = 3
let negValue = -value
console.log(negValue)
console.log(2**3, 2/3)

let str1= "ishu"
let str2 = "pal"
console.log(str1+str2)
console.log(" ")
console.log("1" + 2)                //pehle string hai to string ki tarah add hoga, pehle number hai to number ki tarah
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log()
console.log(+true)
//console.log(true+) will give
console.log(+"")  // + likhne se boolean me convert ho jata hai
console.log()

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
console.log("gameCounter: ",gameCounter++)
console.log("gameCounter: ",++gameCounter)
 

