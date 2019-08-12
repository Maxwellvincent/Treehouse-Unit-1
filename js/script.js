/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote () {
  // Has to be the number 4 as we are using 5 objects within our aray ranging from 0-4
  var num = Math.ceil( Math.random() * 4);
  return quotes[num];
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

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

// Code was obtained from StackOverflow, to produce a random assortment of colors.
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

var intervalTimer = window.setInterval(printQuote, 10000);
var intervalTimer = window.setInterval(setRandomColor, 10000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", setRandomColor);

// Remember to delete the comments that came with this file, and replace them with your own code comments.