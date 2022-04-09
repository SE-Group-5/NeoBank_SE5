// require("dotenv").config();
// const express = require("express");
// const app = express();
// const { User } = require("./database.js");
// const cors = require("cors");
// const PORT = parseInt(process.env.PORT) || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');

const users = require("./routes/api/users");
const transactions = require("./routes/api/transactions");
const messages = require("./routes/api/messages");

const app = express();

//BodyParser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to DB
mongoose.connect(
    db,
    { useNewUrlParser: true }
)
.then(() => console.log("MongoDB succesfully connected"))
.catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/transactions", transactions);
app.use("/api/messages", messages);


// ... other app.use middleware
app.use(express.static(path.join(__dirname, "frontend", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
