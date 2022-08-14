//Array DataStructure
//Array Methods
let num = [1, 2, 3, 4, 5,6,7];
let numToStr = num.toString();
// b is now a string 
console.log(typeof numToStr);
//checks value of b
console.log(NumToStr);

//joinin  with any values 
let joinString = num.join(" and ");
//check values and check DataTypes
console.log(joinString,  typeof joinString);

//removing last element 
 let removeLastValue = num.pop() ;
// pop returns the popped element
console.log(removeLastValue);

//adding  elements in the list last 
 let addNewElement = num.push(56) 
// push returns the new array length
console.log(addNewElement, num)
//Removing elements from starting 
let removeFirstElement = num.shift()
//. checking removed elements and array list
console.log(removeLastElement, num)

//adding elements first in the list
let addElementFirst = num.unshift(78)
//adding Element first and checking added element and total array list
console.log(addElementFirst, num)
