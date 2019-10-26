// Varibles 
// user get answer right
var uncanny = 0;
// User gets answer wrong
var ignorantSlut = 0;
// User doesnt answer
var season10 = 0;
// user select and selction options
var character = "";
var q = [];
var selection;
var officeQuestions;
var intervalId;
//Timer variables
var timer = 25;
// runnning timer
var timeLeft = false; //Set to Boolean.
// Question cycle
var officeCount = office.length;









// Inserting Questions

var office = [
    // Question 1
    {
        officeQuestion: "Season One Episode One, Who is the young padawon Michael is talking too?",
        officeOptions: ["Pam", "Darrel", "Jim", "Kevin"],
        officeAns: 2
    },
    // Question 2
    {
        officeQuestion: " How much did it cost Jim to Impersonate Dwight?",
        officeOptions: ["20 Dollars", "15 Dollars", "34 Dollars", "11 Dollars", "7 Dollars"],
        officeAns:
    },
    // Question 3
    {
        officeQuestion: "Who is Jim trying to Beat in a Ping-Pong Match?",
        officeOptions: ["Dwight", "Stanley", "Ryan", "Darrel"],
        officeAns: 3
    },
    // Question 4
    {
        officeQuestion: "What does Dwight Save Jim From Roy With?",
        officeOptions: ["Pepper-Spray", "Throwing Star", "Gun", "His Karate Skills"],
        officeAns: 0
    },
    // Question 5
    {
        officeQuestion: " Where are the Dundies Hosted Each Year?",
        officeOptions: ["AppleBee's", "Chili's", "Benihana", "The Office"],
        officeAns: 1
    },
    // Question 6
    {
        officeQuestion: "Where Did Jim and Pam Get Married?",
        officeOptions: ["Niagara Falls", "The Office", "Steam Town Mall", "The Warehouse"],
        officeAns: 0
    },
    // Question 7
    {
        officeQuestion: "How Far Away Was Scranton from Utica in the Weight loss Challange?",
        officeOptions: ["10lbs", "2lbs", "5lbs", "8lbs", "3lbs", "9lbs"],
        officeAns: 3
    },
    // Question 8
    {
        officeQuestion: "Who Was Dunder Miflin Bought Out By?",
        officeOptions: ["Michael Scott Paper Company", "David Wallace", "Saber", "Athlead"],
        officeAns: 2
    },
    // Question 9
    {
        officeQuestion: "Why did Jim and Pam Get Divorced?",
        officeOptions: ["Jim Cheated", "Athlead", "Pam Cheated", "They Didnt", "They were never actually married", "Jam Forever"],
        officeAns: 3
    },
    // Question 10
    {
        officeQuestion: "What is Jim role in Dwights Wedding?",
        officeOptions: ["Best Man", "His Own Enemy", "Bestest Mench", "Idiot"],
        officeAns: 2
    },
];