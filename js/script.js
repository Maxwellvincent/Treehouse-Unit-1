/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


var quotes = [
  {quote: " You miss 100% of the shots you don’t take. ",
  source: "Wayne Gretzky"
  },
  {quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. ",
  source: "Michael Jordan",
  tags: ["[Inspirational]","[Uplifting]","[Courageous]"]
  },
  {quote: "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
  source: "Galileo Galilei",
  year: "(1564-1642)"
  },
  {quote: "Do, or do not. There is no 'try'.",
  source: "Yoda",
  citation: "('The Empire Strikes Back')"
  },
  {quote: "The full use of your powers along lines of excellence.",
  source: "by John F. Kennedy",
  citation: "definition of 'happiness'",
  year: "(1917-1963)"
  }
]


function getRandomQuote () {
  // Has to be the number 4 as we are using 5 objects within our aray ranging from 0-4
  var num = Math.ceil( Math.random() * 4);
  return quotes[num];
}


// function to print quote, using string concatenation in html 

function printQuote () {
  var verb = getRandomQuote();
  var emptyString = "<p class=\"quote\"> " + verb.quote + " </p> <p class=\"source\">" + verb.source +" "

  if(verb.citation){
    emptyString += "<span class=\"citation\"> " + verb.citation + " </span>"
  } 
  if(verb.year) {
    emptyString += "<span class=\"year\"> " + verb.year + " </span>"
  }
  if(verb.tags) {
    emptyString += "<span class=\"categorization\"> " + verb.tags + " </span>"
  } 
  emptyString += "</p>"
  document.getElementById("quote-box").innerHTML = emptyString;

}

// Code was obtained from StackOverflow, to produce a random assortment of colors. Created a getter function and set function 
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  var y = getRandomColor()
  var x = document.getElementsByTagName("body")[0];
  x.style.backgroundColor = y;
}

// creates a timer that changes, quotes along with background color automatically
var intervalTimer = window.setInterval(printQuote, 10000);
var intervalTimer = window.setInterval(setRandomColor, 10000);

clearInterval(intervalTimer);

// adds click event to button, to run functions 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", setRandomColor);

// Remember to delete the comments that came with this file, and replace them with your own code comments.