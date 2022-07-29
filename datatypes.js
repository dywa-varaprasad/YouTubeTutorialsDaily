/* a small bit of inforamation or anything is a value in javascript those values are classified according to their nature of data it holds
PRIMITIVE DATA TYPES
nn bb ss u - Primitives data types in js
N--Number is a datatype of numbers and integers in js
N--Null is an intention abscence of any value.
B-- boolean whish is possibly true or false and base of logical operations
B-- bigInt is an integer with more than figures and assigned n at last to indicate it's an natural number
S-- string is a collection of charecters
S-- symbol is another type of data type introduced newly into language
U-- undefined is also bit same like null ; anything is declarared but not assigned is called undefined

N--Null is also belongs to Number datatype (check with typeof operator)
*/


// Here are the examples

let a = null; // null is an intentional representation of empty value 
let b = 345; // nummber data type 
let c = true; // can also be false
let d = BigInt("567") + BigInt("3") // bigint
console.log(d)

let e = "Harry"  //string
let f = Symbol("I am a nice symbol") // symbol
let g // unidentified
console.log(a, b, c , d, e, f, g) //--> null, 345,true, BIGINT570,'harry', symbol("I'm a nice boy"), undefined
console.log(typeof c) //--> boolean

// Non Primitive Data Type - Objects in JS

const item = {
  "Harry": "hero",
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item.Rohan) //--> undefined

console.log(typeof NaN) // --> number


const profileOfCreator = {
name:"Brendan Eich",
developerOf: "JavaScript",
age:61,
inventedYear:1995,
presentStatus:"MDN"
}

profileOfCreator.presentStatus="ceo brave browser "
console.log(profileOfCreator.presentStatus)   //-->'ceo of brave browser'
// value changed even defined with const also
