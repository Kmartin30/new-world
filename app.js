'use strict'; 

console.log ("In the HTML");
alert ("Welcome to Finances");

function getEmail() {
    const userEmail = prompt("What is your email"); 
    //declaring a constant variable called userEmail, assigning it the value of what the prompt returns (the user's input)

    if(userEmail.endsWith("@gmail.com")){
        alert("Hi Google User");
    } 
    else{
        alert("Hey email user!")
    }

    return userEmail;
} 
const theirEmail = getEmail(); 
console.log(theirEmail);  


function greetUser(){
    document.write(" Welcome " + theirEmail + " to Financial Education" );
}

greetUser(); 








function gotolink(link){
    console.log(link)
    alert("Director K. Middleton + 405-960-9901");
return gotolink; 
}



//---Functions are ways to create commands---//

//---pararmeters - placeholders names for inforamation the function will need to do its job---//

function rateMyPage(){
    let rating = prompt(" Rate My Page; MoneyBags 1-10");

    for (let i = 0; i < rating; i++){
        document.write('<img class= "loop-img" src="OIP.jpg" alt="cute money bag"/>');
    }
}

function financialknowledge(){
    let person = prompt("Please Enter Your Name", "Code Fellows");
    let knowledge = prompt("Do you know financial literacy?"); 
    
    if (knowledge === "no" ){
         alert ("Its okay most people dont");
    } else {
        alert("Budgeting is fun and rewarding!"); 
    }
}

financialknowledge();

function Moneyloop(){
    let exitword = "money";
    let userinput = prompt ("Type the word money")
    while (userinput != exitword){
         userinput = prompt ("Type the word money")
    }
    alert("FINALLY")
}

Moneyloop();

