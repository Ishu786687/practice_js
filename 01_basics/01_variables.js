const accountId = 14553
let accountEmail = "ishu@gmail.com"
var accountPassword = "12345"
accountCity = "Agra"

// accountId = 2  constant variable value can't be changed
console.log(accountId);
accountEmail = "te@gmail.com"
accountPassword = "2121"
accountCity = "bengaluru"

console.table([accountId, accountEmail, accountCity])  // table will get formed in output with some indexing

// let and var values can be changed. varibles can eb dclared using let and var both
// we use let because. {} is called as scope in js. 
//var ke sath jitni bhi baar new varible bna kar bhi value change karenge to har jagah uss varible ki value change ho jayegi. 
// block and functional scope issue

let accountState;
// semicolon is optional in js, it's value will be "undefined"

console.table([accountId, accountEmail, accountCity, accountState])  // table will get formed in output with some indexing

