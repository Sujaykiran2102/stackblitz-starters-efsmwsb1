const express = require('express');
const { resolve } = require('path');
require("dotenv").config();
const mongoose=require('mongoose');

const app = express();
const PORT = process.env.PORT || 3010;
const uri = process.env.MONGOD_URI;

app.use(express.static('static'));
app.use(express.json());

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log(` Connected to database`)})
.catch((err)=>{ `Error connecting to database: ${err}`})

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
