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

function gotolink(link){
    console.log(link)
    alert("Director K. Middleton + 405-960-9901");
return gotolink; 
}



//---Functions are ways to create commands---//

//---pararmeters - placeholders names for inforamation the function will need to do its job---//

function rateMyPage(){
    let rating = prompt(" Rate My Page 1-10, 10 being the best and 1 being the worst");

    for (let i = 0; i < rating; i++){
        document.write('<img class= "loop-img" src="OIP.jpg" alt="cute money bag"/>');
    }
}

function response(){
    let response = prompt ('Do you know what a budget is?');
    
}
while ('response' < "no" ){
    response = prompt ('Its okay most people dont');
}
console.log(response)

 alert("Budgeting is fun and rewarding!"); 

console.log(response)