let numIt = Number(prompt('enter any num'))

for (let i = 1; i <= numIt; i++) {
  if ((i % 2) == 0) {
    console.log('Fizz ' + i)
  }
  else if ((i % 3) == 0) {
    console.log('Buzz ' + i)
  }
  else if ((i % 5) == 0 || i % 3 == 0 || i % 2 == 0) {
    console.log('FIzzBuzz ' + i)
  }

  else {
    console.log("not divisible by 2,3, 5 and num is " + i)
  }
}
