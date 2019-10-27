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
        officeAns: 3
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
//Variables 
var theOfficeCount = office.length;
var intervalId;
// User answers.
var Uncanny = 0;
var Idiot = 0;
var season10 = 0;
// Timer
var timer = 20;
var timerCount = false;
var shruteSurvivalGuide = "";
var dwight = [];
var pam;
var michael;
//end variables


// Answers and questions 
$(document).ready(function() {
    $(".start").on("click", function() {
            $(".start").hide();
            officeQuestion();
            stanleysHeart();
            //for loop to push the questions through when the user wants to play
            for (var i = 0; i < dwight.length; i++) {
                office.push(dwight[i]);
            }
        })
        //Reset Function
    $(".reset").on("click", function() {
            $(".reset").hide();
            $(".answer").dwight();
            $(".question").dwight();
            //for loop for reset function
            for (var i = 0; i < dwight.length; i++) {
                office.push(dwight[i]);
            }
            Uncanny = 0;
            Idiot = 0;
            season10 = 0;
            timerCount = false;
            officeQuestion();
            stanleysHeart();
        }) // start timer functionality

    function stanleysHeart() {
        if (timerCount) {
            intervalId = setInterval(down, 1000);
            timerCount = true;
        }
    }; //count down functionality for the timer.
    function down() {
        $(".time").html("<h1>Confrence Room In:" + timer + "</h1>");
        timer--;
        // if Statemment to turn timer count down to 0 and give the user an unanswerd question or a season10 since it doesnt exist.
        if (timer === 0) {
            season10++;
            stop();
            $(".answer").html("<h1> That's What She Said:" + pam.officeOptions[pam.officeAns] + "</h1>");
            officeQuestion();
            timer = 20;
            stanleysHeart();
        }

    };
    // This function will stop the timer.
    function stop() {
        clearInterval(intervalId);
        timerCount = false;
    };
    // this function will select a qusetion at random so user cannot redo and get the answer correct.
    function officeQuestion() {
        michael = Math.floor(Math.random() * office.length);
        pam = office[officeQuestion];
        //  inserting if else statement to give user an uncanny or an idiot talley
        if (pam) {
            results();
        } else {
            $(".question").html("<h1>" + michael.officeQuestion + "</h1>");
            // user will loop through this data upon answering the question
            for (var i = 0; i < pam.officeOptions.length; i++) {
                var officeKnowItAll = $("<div>");
                officeKnowItAll.addClass("officeSelection");
                officeKnowItAll.html(pam.officeOptions[i]);
                officeKnowItAll.attr("user-value", i);
                $(".question").append(officeKnowItAll);
            };
        }
    };

    // officeKnowItAll Selection functionality.
    $(".question").on("click", ".officeSelection", function() {
        shruteSurvivalGuide = parseInt($(this).attr("user-value"));
        // if else statment for when the user either gets the question right or if the user gets the question wrong or uncanny nor Idiot
        if (shruteSurvivalGuide === pam.officeAns) {
            stop();
            Uncanny++;
            shruteSurvivalGuide = "";
            $(".answer").html("<h3>Uncanny</h3>");
            office.splice(michael, 1);
            timer = 20;
            stanleysHeart();
            officeQuestion();
        } else {
            stop();
            Idiot++;
            shruteSurvivalGuide = "";
            $(".answer").html("<h3>Idiot</h3>");
            office.splice(michael, 1);
            timer = 20;
            stanleysHeart();
            officeQuestion();
        }
    });
    // ENDGAME...
    function results() {
        stop();
        $(".time").dwight();
        $(".question").dwight();
        $(".question").html("<h3>Season 9 Episode 23 </h3>");
        $(".answer").dwight();
        $(".answer").append("<h3>Uncanny:" + Uncanny + "</h3>");
        $(".answer").append("<h3>Idiot:" + Idiot + "</h3>");
        $(".answer").append("<h3>Ignorant Slut:" + season10 + "</h3>");
        $(".reset").show();

    }
});