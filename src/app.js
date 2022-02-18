const express = require("express");
const mongoose = require('mongoose');

// MIDLLEWARES
const app = express();
app.use(express.json());
app.use(express.Router());

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.set('port', process.env.PORT || 3000);
    const server = app.listen(app.get('port'), async () => {
      console.log(`Express running → PORT ${server.address().port}`);
    });
  });
