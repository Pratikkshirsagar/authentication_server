const express = require('express');

const app = express();

app.get('api/v1/signup', (req, res) => {
  res.json({
    data: 'you hit signup endpoint',
  });
});

const port = 8000;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
