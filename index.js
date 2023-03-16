const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'questions.json');


app.get('/questions', (req, res) => {
  fs.readFile(questionsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
      return;
    }

    const questions = JSON.parse(data);

    res.json(questions);
  });
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
