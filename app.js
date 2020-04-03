const express = require('express');
const app = express();


//Send a GET request to /phrases to READ a list of quotes
app.get('/phrases', (req, res)=>{
    res.json(data);
});

//Send a GET request to /quotes/:id to READ(view) a quote
app.get('/phrases/:id', (req, res)=>{
    const phrase = data.phrases.find(phrase => phrase.id == req.params.id);
    res.json(phrase);
});

//Send a POST request to /quotes  to CREATE a new quote
//Send a PUT request to /quotes/:id to UPDATE(edit) a quote
//Send a DELETE request to/quotes/:id  to DELETE a quote
//Send a GET request to /quotes/quote/random READ (view) a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));

const data = {
    phrases: [
      {
        id: 8721,
        phrase: "Ad astra per aspera.",
        meaning: "Through adversity to the stars"
      },
      {
        id: 5779,
        phrase: "Acta non verba.",
        meaning: "Deeds, not words"
      },
      {
        id: 3406,
        phrase: "Aut viam inveniam aut faciam",
        meaning: "I will either find a way or make one,"
      }
    ]
  }