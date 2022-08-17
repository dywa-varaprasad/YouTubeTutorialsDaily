
// programme on while loop

//asking users to enter a value.
let n = prompt("Enter the value of n")

//what ever comes from prompt will be a string and explicitly change it's data type into number 
n = Number.parseInt(n)


//looping through the value 
let i = 0;
while(i<n){
  console.log(i)
  i++;
}


// programme on do while loops
let n = prompt("Enter the value of n")
//convert 
n = Number.parseInt(n)

//looping it will check once 
let i = 10;
do{
  console.log(i)
  i++;
}while (i < n) 
