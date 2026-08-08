const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD Pipeline! Version 1');
});

app.listen(port, () => console.log(`App running on port ${port}`));
