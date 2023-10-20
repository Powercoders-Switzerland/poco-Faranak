
/*Odd / even reporter*/
let i=prompt("Enter a num 1 to 20");
 if (i>0 && i<20){
  if ( i % 2 == 0) {
 console.log(i + " is even");
  }
  else {
  console.log(i + " is odd");
  };
}
else {
    console.log("no valid")
}

/*Odd / even reporter 2.0*/


for (let x = 1; x <= 20; x++) {
    if (x % 2 == 0) {
      console.log(x + " is even");
    } else {
      console.log(x + " is odd");
    }
  }

/*Multiplication tables*/


let i = prompt("Enter a num 1 to 10");
 if (i>0 && i<10){
      console.log(i*9);
  }
else {
    console.log("no valid")
}

/* Multiplication tables 2.0*/
for (let x = 1; x <= 10; x++) {

    console.log(x *9);
}
