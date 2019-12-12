const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const app = express();

require('./models/Recipe');


// Bodyparser Middleware
app.use(express.json());

const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/usersRouter'));
app.use('/api/auth', require('./routes/authRouter'));

require('./routes/recipeRoute')(app);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/recipes/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/recipes', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));