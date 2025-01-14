console.log("hello "+"world")
const name = "ishu"
const repoCount = 10
console.log(repoCount + name + "Value")

//use back ticks: string interpolation, make plceholders and inject variab;e directly
console.log()
console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String("Ishu-PAL")
console.log(gameName)
console.log("gameName[0]: ",gameName[0])
console.log("Prototype: ",gameName.__proto__)
console.log("Length of string: ",gameName.length)
console.log("to upper case: ",gameName.toUpperCase()) // original value will not get change as string is stored in stack memory
console.log("character at 2: ",gameName.charAt(2))
console.log("position of t: ",gameName.indexOf('t'))

const newString = gameName.substring(0,4)           // can't give negative values in substring
console.log("newString: ",newString)

const anotherString = gameName.slice(-7,4)          //for negative values do str.length+(negative value), then do slicing
console.log("anotherString: ",anotherString)

//trim and replace method
const newStringOne = "  ishu  "
console.log("Original String: ",newStringOne)
console.log("Trimmed String: ",newStringOne.trim())     // works on white spaces and line terminators

const url = "https://ishu.com/ishu%20pal%20"
const url2 = url.replace('%20', '-')
console.log(url2)
console.log(url.includes('ishu'))

//convert string into array
const game = new String("Hi-his-umbrella-is-here.")
console.log(game.split('-'))
//go through all the methods of string



