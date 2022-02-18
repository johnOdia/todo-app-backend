const express = require("express");
const cors = require('cors');
const app = express();

// MIDLLEWARES
app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log('server started on 3001'));
