'use strict'; 
console.log ("In the HTML");
alert ("Welcome to Finances");


const userEmail = prompt("What is your email");
console.log(userEmail);

document.write(" Welcome " + userEmail + " to Financial Education" );
document.write("<h3>Mission & Values</h3><p>Have a nice day!</p>")

if(userEmail == "@gmail.com") {alert("Hey Google User");
}

let person = prompt("Please Enter Your Name", "Code Fellows");
let knowledge = confirm ("Do you know financial literacy?"); 