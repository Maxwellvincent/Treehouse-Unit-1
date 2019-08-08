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
  {quote: " Hi beautiful",
  source: "damien"
  },
  {quote: "you are awesome",
  source: "chris"
  },
  {quote: "Be mine",
  source: "mathew",
  citation: "23"
  },
  {quote: "this will do",
  source: "adam",
  citation: "23"
  },
  {quote: "marry me",
  source: "John",
  citation: "23",
  year: "12"
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

  if(verb.citation === ""){
    emptyString += + "<span class=\"citation\"> " + " </span>"
  } 
  else {
    emptyString += "<span class=\"citation\"> "+" "+ verb.citation +"</span>"
  }

  if(verb.year === "") {
    emptyString += "<span class=\"year\"> " + " </span>"
  } 
  else {
    emptyString += "<span class=\"year\"> " +" "+ verb.year + "</span>"
  }

  emptyString += "</p>"
  document.getElementById("quote-box").innerHTML = emptyString;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.