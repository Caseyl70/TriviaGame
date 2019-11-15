// Inserting Questions
var card = $("#officeTrivia");
var countStartNumber = 20;

var office = [
  // Question 1
  {
    officeQuestion: "Season One Episode One, Who is the young padawon randomIndex is talking too?",
    officeOptions: ["Stanley", "Darrel", "Jim", "Kevin"],
    officeAns: "Jim",
    image: "assets/images/200w.webp"
  },

  // Question 2
  {
    officeQuestion: " How much did it cost Jim to Impersonate Dwight?",
    officeOptions: ["20 Dollars", "15 Dollars", "34 Dollars", "11 Dollars", "7 Dollars"],
    officeAns: "11 Dollars",
    image: "assets/images/200.webp"
  },

  // Question 3
  {
    officeQuestion: "Who is Jim trying to Beat in a Ping-Pong Match?",
    officeOptions: ["Dwight", "Stanley", "Ryan", "Darrel"],
    officeAns: "Darrel",
    image: "assets/images/giphy (3).webp"
  },

  // Question 4
  {
    officeQuestion: "What does Dwight Save Jim From Roy With?",
    officeOptions: ["Pepper-Spray", "Throwing Star", "Gun", "His Karate Skills"],
    officeAns: "Pepper-Spray",
    image: "assets/images/giphy.webp"
  },

  // Question 5
  {
    officeQuestion: " Where are the Dundies Hosted Each Year?",
    officeOptions: ["AppleBee's", "Chili's", "Benihana", "The Office"],
    officeAns: "Chili's",
    image: "assets/images/chilis.webp"
  },

  // Question 6
  {
    officeQuestion: "Where Did Jim and Pam Get Married?",
    officeOptions: ["Niagara Falls", "The Office", "Steam Town Mall", "The Warehouse"],
    officeAns: "Niagara Falls",
    image: "https://media1.giphy.com/media/l0MYt5jPR6QX5pnqM/200.webp?cid=790b76118d2333ca52f8bbd7cff790d1f4e0e1d80e4a7118&rid=200.webp"
  },

  // Question 7
  {
    officeQuestion: "How Far Away Was Scranton from Utica in the Weight loss Challange?",
    officeOptions: ["10lbs", "2lbs", "5lbs", "8lbs", "3lbs", "9lbs"],
    officeAns: "8lbs",
    image: "assets/images/200 (1).webp"
  },

  // Question 8
  {
    officeQuestion: "Who Was Dunder Miflin Bought Out By?",
    officeOptions: ["Micheal Scott Paper Company", "David Wallace", "Sabre", "Athlead"],
    officeAns: "Sabre",
    image: "assets/images/giphy (4).webp"
  },

  // Question 9
  {
    officeQuestion: "Why did Jim and Pam Get Divorced?",
    officeOptions: ["Jim Cheated", "Athlead", "userInput Cheated", "They Didnt", "They were never actually married", "Jam Forever"],
    officeAns: "They Didnt",
    image: "assets/images/giphy (2).webp"
  },

  // Question 10
  {
    officeQuestion: "What is Jim role in Dwights Wedding?",
    officeOptions: ["Best Man", "His Own Enemy", "Bestest Mench", "losses"],
    officeAns: "Bestest Mench",
    image: "assets/images/giphy (1).webp"
  },
];
var counter;
var theOfficeTriviaGame = {
  office: office,
  currentQuestion: 0,
  counter: countStartNumber,
  uncanny: 0,
  idiot: 0,

  down: function () {
    theOfficeTriviaGame.counter--;
    $("#counter-number").text(theOfficeTriviaGame.counter);
    if (theOfficeTriviaGame.counter === 0) {
      console.log("TIME UP");
      theOfficeTriviaGame.timeUp();
    }
  },
  dundie: function () {
    counter = setInterval(theOfficeTriviaGame.down, 1000);
    card.html("<h2>" + office[this.currentQuestion].officeQuestion + "</h2>");
    for (var i = 0; i < office[this.currentQuestion].officeOptions.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + office[this.currentQuestion].officeOptions[i]
        + "'>" + office[this.currentQuestion].officeOptions[i] + "</button>");
    }
  },

  nextQuestion: function () {
    theOfficeTriviaGame.counter = countStartNumber;
    $("#counter-number").text(theOfficeTriviaGame.counter);
    theOfficeTriviaGame.currentQuestion++;
    theOfficeTriviaGame.dundie();
  },
  timeUp: function () {
    clearInterval(counter);
    $("#counter-number").html(theOfficeTriviaGame.counter);
    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + office[this.currentQuestion].officeAns);
    card.append("<img src='" + office[this.currentQuestion].image + "' />");
    if (theOfficeTriviaGame.currentQuestion === office.length - 1) {
      setTimeout(theOfficeTriviaGame.results, 3 * 1000);
    }
    else {
      setTimeout(theOfficeTriviaGame.nextQuestion, 3 * 1000);
    }
  },

  results: function () {
    clearInterval(counter);
    card.html("<h2>All done, heres how you did!</h2>");
    $("#counter-number").text(theOfficeTriviaGame.counter);
    card.append("<h3>Correct Answers: " + theOfficeTriviaGame.uncanny + "</h3>");
    card.append("<h3>Incorrect Answers: " + theOfficeTriviaGame.idiot + "</h3>");
    card.append("<h3>Unanswered: " + (office.length - (theOfficeTriviaGame.idiot + theOfficeTriviaGame.uncanny)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },
  clicked: function (e) {
    clearInterval(counter);
    if ($(e.target).attr("data-name") === office[this.currentQuestion].officeAns) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function () {
    theOfficeTriviaGame.idiot++;
    clearInterval(counter);
    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + office[theOfficeTriviaGame.currentQuestion].officeAns + "</h3>");
    card.append("<img src='" + office[theOfficeTriviaGame.currentQuestion].image + "' />");
    if (theOfficeTriviaGame.currentQuestion === office.length - 1) {
      setTimeout(theOfficeTriviaGame.results, 3 * 1000);
    }
    else {
      setTimeout(theOfficeTriviaGame.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function () {
    clearInterval(counter);
    theOfficeTriviaGame.uncanny++;
    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + office[theOfficeTriviaGame.currentQuestion].image + "' />");
    if (theOfficeTriviaGame.currentQuestion === office.length - 1) {
      setTimeout(theOfficeTriviaGame.results, 3 * 1000);
    }
    else {
      setTimeout(theOfficeTriviaGame.nextQuestion, 3 * 1000);
    }
  },
  reset: function () {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.uncanny = 0;
    this.incorrect = 0;
    this.dundie();
  }
};
$(document).on("click", "#start-over", function () {
  theOfficeTriviaGame.reset();
});
$(document).on("click", ".answer-button", function (e) {
  theOfficeTriviaGame.clicked(e);
});
$(document).on("click", "#start", function () {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  theOfficeTriviaGame.dundie();
});
