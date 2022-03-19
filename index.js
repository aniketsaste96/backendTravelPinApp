const express = require("express");
const app = express();
const mongoose = require("mongoose");
//must configure env file
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
var bodyParser = require('body-parser');

//before making api req must parse
//act as middleware
app.use(express.json())
app.use(cors())
// app.use(bodyParser.json())

//connect with database using mongoose
const Url = process.env.MONGO_URL
mongoose.connect(Url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected with DB");
}).catch(err => console.log(err));


//routes

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);
//here pinRoute automatically added /api/pins before it like localhost:9000/api/pins/post









//server listening
app.listen(3001, () => console.log("server listening on 3001 😊"));


//ERROR's
//valkidation error => data must be in json format check in postman

