// Check if a number is positive, negative, or zero.

let num = Number(prompt("Enter  a number :"));

if(!isNaN(num)){

    if (num < 0) {
        console.log("Given number is negative");
    } else if (num > 0) {
        console.log("Given number is positive");
    } else{
        console.log("Given number is zero");
    }
    
}else{
    console.log("Enter valid Number");
}