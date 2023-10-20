let a = prompt("Please enter the year");
let q = prompt("Please enter your birthday");
if (isNaN(a )||isNaN(q) )
  {
    alert("Must input numbers");
    
  }
  else {
let s=a-q;
let m =1+s;
console.log("I will be "+s+" either "+ " or "+ m+" in "+ a);

  }