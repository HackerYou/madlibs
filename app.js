var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'));

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'));

// Include your own logic here (so it has precedence over the wildcard
// route below)

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/madlibs");

// Define a schema for Words. Schemas are defined
// by passing an object where the keys are the field names you want in your
// model and the values are the type of data.
const WordsSchema = new mongoose.Schema({
  number_1: Number,
  foreign_country: String,
  adverb: String,
  ing_verb_1: String,
  body_part_1: String,
  plural_noun_1: String,
  building: String,
  adjective: String,
  body_part_2: String,
  body_part_2: String,
  plural_noun_3: String,
  ing_verb_2: String,
  number_2: Number,
  plural_noun_4: String,
  verb: String,
  plural_noun_3: String,
  language: String,
  noun: String
});

// Initialize a model based on the schema we just defined. `Words` will
// now contain functions to help us work with the database.
const Words = mongoose.model("Word", WordsSchema);

// Retrieve all words from the system
app.get('/words', function(req, res, next) {
  console.log("getting words");
  // Try to find a words model from the database. Since we'll only
  // ever have one, we can just call `findOne` and return whatever
  // it gives us.
  Words.findOne().then(words => {
    // If we don't have anything in the database, return a new model.
    if (!words) { words = new Words(); }
    console.log("getting words", words);
    // Send the JSON representation of words.
    res.send(words);
  });
});

// Update the words in our system.
app.put('/words', function(req, res, next) {
  Words.findOne().then(words => {
    if (!words) { words = new Words(); }

    // Object.assign takes all of the fields of req.body, and adds
    // them to words.
    Object.assign(words, req.body);

    // Save the words to the database
    words.save().then(() => res.send("OK")));
  });
});

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start your server, and listen on port 8080.
app.listen(8080, function() {
  console.log("App is now listening on port 8080!");
})
