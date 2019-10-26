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




// GAME FUNCTIONALITY

$(document).ready(function() {
    //Inserting reset and start functionality on the buttons tag.
    $(".Reset").hide();
    $(".Start").on("click", function() {
        //Start button
        $(".Start").hide();
        selectQ();
        timerCount();
        // for loop for questions and user answer
        for (var i = 0; i < office.length; i++) {
            empty.push(office[i]);
        }
    })
    $(".Reset").on("click", function() {
            $(".Reset").hide();
            $(".answer").empty();
            $(".question").empty();
            // for loop for reset button
            for (var i = 0; i < empty.length; i++) {
                office.push(empty[i]);
            }
            uncanny = 0;
            ignorantSlut = 0;
            season10 = 0;
            timeLeft = false;
            selectQ();
            timerCount();
        })
        // Timer Count Down
    function down() {
        $(".Time").html("<p> Time Left: " + timer + "</p>");
        timer--;
        // if statement for when user doesnt answer in time
        if (timer === 0) {
            season10++;
            stop();
            $(".answer").html("<p> You Ignorant Slut Times Up... The correct answer was: " + select.officeOptions[select.officeAns] + "</p>");
            selectQ();
            timer = 25;
            timerCount();
        }
    };
    // timer Start functionality
    fucntion startDown() {
        if (timerLeft) {
            intervalId = setInterval(down, 1000);
            timeLeft = true;
        }
    };
    // Timer Stop
    function stopDown() {
        clearInterval(intervalId)
        timeLeft = false;
    };
    //Selecting question
    fucntion selectOffice() {
        officeQuestions = Math.floor(Math.random() * office.length);
        selection = office[officeQuestions];
        // if statement for selction(s)
        if (selection) {
            results();
        } else {
            $(".question").html("<p>" + selection.officeQuestion + "</p>");
            // for loop for selection
            for (var i = 0; i < selection.officeOptions.length; i++) {
                var userInput = $("<div>");
                userInput.html(selection.officeOptions[i]);
                userInput.addClass("userSelect");
                userInput.attr("input-value", i);
                $(".question").append(userInput);
            };
        }
    };
    // click event for user answer
    $(".question").on("click", ".userSelect", function() {
        character = parseInt($(this).attr("input-value"));
        // if else  statement for user choice and selection
        if (userInput === select.officeAns) {
            stop();
            uncanny++;
            userInput = "";
            $(".answer").html("<h1>That's What She Said!</h1>");
            office.splice(officeQuestions, 1);
            timer = 25;
            timerCount();
            selectOffice();
        } else {
            stop();
            ignorantSlut++;
            userInput = "";
            $(".answer").html("<h1>Idiot.</h1>");
            office.splice(officeQuestions, 1);
            timer = 25;
            timerCount();
            selectOffice();
        }

    });

    // Game Functionality and Results from the user
    function results() {
        stop();
        $(".Time").empty();

        $(".question").empty();
        //End Game
        $(".question").html("<h3>As Season 9 Episode 23 says, Your Fired, It's For The Severance </h3>");

        $(".answer").empty();
        $(".answer").append("<h3>Uncanny: " + uncanny + "</h3>");
        $(".answer").append("<h3>Idiot: " + ignorantSlut + "</h3>");
        $(".answer").append("<h3> Ignorant Slut: " + season10 + "</h3>");
        // reset.show
        $(".Reset").show();
    }

});