//Function ('speedDetector()') to determine a student's grade
function speedDetector() {

    //prompt function to ask for input on terminal
    const prompt = require('prompt-sync')();

    //prompt a user to input data on terminal
    const speed = parseInt(prompt("Please Enter Car Speed: "));

    //declaring variables
    const speedLimit = 70;
    const kmPerPoint = 5;

    //Calculating the total number of demeriter points.
    const points = Math.floor((speed - speedLimit)/kmPerPoint);

     //if statement to check the speed 
    if(speed < 70) {
        console.log("Ok");
    }
    //checks if points are more than 12 and suspends License
    else if(points >= 12) {
        console.log("License suspended");
    }

    else {
        console.log("The total number of demerit points is: ", points);
    }
}

//function calling
speedDetector();