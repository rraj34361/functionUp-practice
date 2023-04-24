const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
}

// Attach middleware function to app
app.use(logger);

// Route handler
app.get('*', (req, res) => {
  res.send('Hello, world!');
});

app.listen(300, () => {
  console.log('Server listening on port 300');
});
