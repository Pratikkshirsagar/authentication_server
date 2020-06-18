const express = require('express');

const app = express();

// Import routes
const authRouter = require('./routes/authRouter');

app.use('/api/v1', authRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
