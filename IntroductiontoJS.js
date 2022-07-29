
//Q-01.create a variable of String Type and add a Number to it observe it
//initialising a variable declaration
let myFavoriteLanguage; 
//assigning a variable declarartion
myFavoriteLanguage ="JavaScript";

// string concatenation any thing with a string can combined into a single string
let addNumToStr = myFavoriteLanguage + " ES" + 6;


// adding a string with a Number will Concatenate the statement means just combines two expressions into one. and makes it a string 
console.log(addNumToStr);


//Q-02.check below for string concatenation. typeof operator is a unary operator which shows us the what's is the datatype of an expression
console.log(typeof addNumToStr)


//Q.03 create a const object; can  you re-assign it  to hold a number?

const object={name:"hari",style:"superb",time:2}

/* below code will through you an error
let object= 5;
error seen as object has been already been declared.*/

//Q.04 try to a new key-value in the previous object is it possible?

//yes by [.] dot notation

object.bakery="cake";
object.varsiry=8;
// object's property key-values can change even when declaration with cosnt Because, const only reference for the property but not the key-value pairs
console.log(object)


//Q.05 write a program for a dictionary

const dictionary ={hardwork:"a great deal of effort or endurance",paid:"past and past participle of pay", skill:"the ability to do something well,expertise"}

console.log(dictionary ) //-->{hardwork:"a great deal of effort or endurance",paid:"past and past participle of pay", skill:"the ability to do something well,expertise"}


//functions introdution

console.log("This program adds 1, 2 and 54") //--> this program adds 1,2 and 54

// creating a function to add three nums
function addThreeNumbers(a, b, c) {
    return a + b + c;
}

// assigning the function expression to the c varible
let c = addThreeNumbers(1, 2, 54)
console.log(c) //--> 57


// console.log is the way to see the output in developing stage for the debugging purpose





