require("dotenv").config();
const express = require("express");
const app = express();
const { User } = require("./database.js");
const cors = require("cors");
const PORT = parseInt(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
