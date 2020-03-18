require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);



app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));
