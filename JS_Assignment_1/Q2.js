const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your age: ", (input) => {
    
    let age = parseInt(input); 
    let status = (age >= 18) ? "Adult" : "Minor";

    console.log("You are a " + status);

    readline.close(); 
});
