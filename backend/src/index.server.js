const express = require('express')
const mongoose = require("mongoose")
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
// config env
env.config();

//mongodb connection
const uri='mongodb+srv://root:14021999@hakienit.zwvol.mongodb.net/dichvuxe?retryWrites=true&w=majority'
mongoose.connect( uri,{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
  .then(() => {
    console.log("Database connected!");
  });

// app
app.use(bodyParser());
app.use('/api',authRoutes)
app.listen(1402
    // process.env.PORT
    , () => {
  console.log("server is running!");
});
