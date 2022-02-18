const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const todoRoutesConfig = require('./src/routes/todo_routes');

// MIDLLEWARES
const app = express();
app.use(express.json());

// ROUTES
todoRoutesConfig(app);

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB)
  .then(() => {
    app.set('port', process.env.PORT || 3000);
    const server = app.listen(app.get('port'), async () => {
        console.log(server.address().port);
      console.log(`Express running → PORT ${server.address().port}`);
    });
  });
