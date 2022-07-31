// new way of creating function syntax
// also called function expression where a function is stored inside of a variable 
const hello = () => {
  console.log("Hey how are you. I am toh fine yaar")
  return "hi"
}

// simple function to add 2 numbers and return thier average


function onePlusAvg(x, y) {
  return 1 + (x + y) / 2
}


// arrow functions  to add two numbers in new way of declaration of functions 

const sum = (p, q) => {
  return p + q
}

//examples 

let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log(v)
console.log("One plus Average of a and b is ", onePlusAvg(a, b))
console.log("One plus Average of b and c is ", onePlusAvg(b, c))
console.log("One plus Average of a and c is ", onePlusAvg(a, c))
console.log(sum(9, 7))
