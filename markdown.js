// Test file for Aikido custom SAST rule (markdown rendering test)
// This file deliberately contains an eval() call so the custom rule fires.
// Delete this file once you have your screenshot.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/calculate', (req, res) => {
  const expression = req.body.expression;

  // This is the line the custom rule matches
  const result = eval(expression);

  res.json({ result });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
