let a = prompt("Hello, Enter you age?");
a = Number(a); // Converting the string to a number

if(a<0){
  alert("This is an invalid entry");
}

else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}

else{
  alert("You can now drive as you are above 18");
}
// below console only executes when any of the above set of conditions executes
console.log("Done")


// Terenary Operator "?,:"
conditional check happens before question mark and and executes if true or else part which is : will be executed 
console.log("You can",a<18? "not drive" :"drive")
