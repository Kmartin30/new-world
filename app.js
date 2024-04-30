'use strict'; 

console.log ("In the HTML");
alert ("Welcome to Finances");

function getEmail() {
    const userEmail = prompt("What is your email"); 
    //declaring a constant variable called userEmail, assigning it the value of what the prompt returns (the user's input)
return userEmail;
} 
const theirEmail = getEmail(); 
console.log(theirEmail);  


function greetUser(){
    document.write(" Welcome " + theirEmail + " to Financial Education" );
}

greetUser(); 



if(userEmail == "@gmail.com") {alert("Hey Google User");
}

let person = prompt("Please Enter Your Name", "Code Fellows");
let knowledge = confirm ("Do you know financial literacy?"); 

function printContact(){
    alert("Name + Phone Number");

}



//---Functions are ways to create commands---//

//---pararmeters - placeholders names for inforamation the function will need to do its job---//