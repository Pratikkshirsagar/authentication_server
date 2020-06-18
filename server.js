const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config/.env' });

const app = express();

// connect to db
connectDB();

// Import routes
const authRouter = require('./routes/authRouter');

// app middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allow all origines

if ((process.env.NODE_ENV = 'development')) {
  app.use(cors({ origin: `http://localhost:3000` }));
}

// Route middleware
app.use('/api/v1', authRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT} - ${process.env.NODE_ENV}`);
});
