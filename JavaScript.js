
//Setting the user score to 0

var score = 0;

//Question 1

var quest1 = prompt("What is 2 + 2?");

if (quest1 === "4") {
    alert("You are correct!");
    score = score + 1;
}

else {
    alert("Sorry that is not correct");
}
var quest2 = prompt("What is 5 * 5?");

//Question 2

if (quest2 === "25") {
    alert("You are correct!");
    score = score + 1;
}

else {
    alert("Sorry that is not correct");
}
var quest3 = prompt("What is 1 + 1?");

//Question 3

if (quest3 === "2") {
    alert("You are correct!");
    score = score + 1;
}

else {
    alert("Sorry that is not correct");
}

//Checking for passing score

if (score === 2 || score === 3) {
    document.write("You have passed the quiz");
}

else {
    document.write("sorry you did not pass");
}