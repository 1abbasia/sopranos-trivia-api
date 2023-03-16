const express = require('express');
const app = express();

app.get('/api/questions', (req, res) => {
  // return a JSON response with the trivia questions
});

app.get('/api/questions/:id', (req, res) => {
  // return a JSON response with a specific trivia question
});
